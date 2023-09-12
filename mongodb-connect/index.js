import fs from 'fs';
import csv from 'csv-parser';
import { MongoClient, ServerApiVersion } from 'mongodb';
import * as radash from 'radash'
import 'dotenv/config';


const uri = process.env.uri

const COLLECTION_NAME = 'credit_collection';
const DB_NAME = 'db_eig';

const PARALLEL_EXECUTIONS = 6;
const PARALLEL_EXECUTION_CHUNK = 50_000;


let chunk = (arr, chunkSize) => {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}


let readDataFromCSV = async (csvFile) => {
    let data = [];
    let rowCount = 0;
    const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });

    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);


    const pipeline =
        fs.createReadStream(csvFile)
            .pipe(csv());

    pipeline.on('data', (row) => {
        process.stdout.write(`Reading ${rowCount++} rows \r`)

        data.push({
            age: parseInt(row.Age),
            gender: row.Gender,
            annual_income: parseFloat(row.Income),
            credit_score: parseInt(row.CreditScore),
            credit_history_length: parseInt(row.CreditHistoryLength),
            loans_count: parseInt(row.NumberOfExistingLoans),
            loan_amount: parseFloat(row.LoanAmount),
            loan_tenure: parseInt(row.LoanTenure),
            is_customer: row.ExistingCustomer,
            state: row.State,
            city: row.City,
            ltv: parseFloat(row.LTVRatio),
            employment_profile: row.EmploymentProfile,
            profile_score: parseInt(row.ProfileScore),
            occupation: row.Occupation
        });



    });

    pipeline.on('end', async () => {
        console.log(`Data size - ${data.length}`);
        const chunks = chunk(data, PARALLEL_EXECUTION_CHUNK);
        await radash.parallel(PARALLEL_EXECUTIONS, chunks, async (chunk) => {
            const now = Date.now()
            const stats = `size: ${chunk.length} records`
            console.time(`id: ${now} - stats: ${stats} - took: `);
            await collection.insertMany(chunk);
            console.timeEnd(`id: ${now} - stats: ${stats} - took: `);
        })
        console.log('End process');
        client.close();
    });

}

if (process.argv[2] && process.argv[2] == '-f') {
    if (!fs.existsSync(process.argv[3])) {
        console.error('The file does not exists.');
        process.exit(1);
    } else {
        readDataFromCSV(process.argv[3]);
    }
} else {
    console.error('The flag -f with the path to the CSV file is required.');
    process.exit(1);
}


