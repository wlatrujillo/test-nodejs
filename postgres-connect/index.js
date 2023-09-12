import fs from 'fs';
import pgPromise from 'pg-promise';
import csv from 'csv-parser';
import 'dotenv/config';


// Configura la conexión a la base de datos
const pgp = pgPromise({
    capSQL: true
});
const db = pgp({
    "user": process.env.user,
    "password": process.env.password,
    "host": process.env.host,
    "port": process.env.port,
    "database": process.env.user,
    "max": process.env.max
});

const CHUNK_SIZE = 50_000;

let chunk = (arr, chunkSize) => {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

let parseRow = (row) => {
    return {
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
    }
}



let loadDataFromCsv = (csvFile) => {
    let rowCount = 0;
    let rows = [];

    const pipeline = fs.createReadStream(csvFile)
        .pipe(csv());

    pipeline.on('data', (row) => {
        if (!row) return;
        rows.push(parseRow(row));
        process.stdout.write(`Reading ${rowCount++} rows \r`);
    });

    pipeline.on('end', async () => {
        // our set of columns, to be created only once (statically), and then reused,
        // to let it cache up its formatting templates for high performance:
        const cs = new pgp.helpers.ColumnSet(
            ['age', 'gender', 'annual_income',
                'credit_score', 'credit_history_length', 'loans_count',
                'loan_amount', 'loan_tenure', 'is_customer',
                'state', 'city', 'ltv',
                'employment_profile', 'profile_score', 'occupation'],
            { table: 'credit_table' }
        );

        const chunks = chunk(rows, CHUNK_SIZE);

        console.log('Iterating over', chunks.length, 'chunks');
        for (let chunk of chunks) {
            // generating a multi-row insert query:
            console.log('Loading query with', chunk.length, 'records');
            const query = pgp.helpers.insert(chunk, cs);

            console.log('Running query...');
            await db.none(query);
            console.log('Proceso completado.');
        }
        pgp.end(); // Cierra la conexión a la base de datos cuando haya terminado.
    });

}

// Llama a la función para cargar datos desde el archivo CSV
if (process.argv[2] && process.argv[2] === '-f') {
    console.log('Loading Data from:', process.argv[3]);
    if (!fs.existsSync(process.argv[3])) {
        console.error('File does not exists');
        process.exit(1);
    }
    loadDataFromCsv(process.argv[3]);
} else {
    console.error('Flag -f with file name is required example: node index -f data.csv')
}
