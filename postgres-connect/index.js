import fs from 'fs';
import pgPromise from 'pg-promise';
import csv from 'csv-parser';
import bdConfig from './bd_config.json' assert { type: "json" };


// Configura la conexión a la base de datos
const pgp = pgPromise({
    capSQL: true
});
const db = pgp(bdConfig);

// Función para leer y cargar datos desde un archivo CSV
let cargarDatosDesdeCSV = (rutaArchivo) => {
    let count = 0;
    let rows = [];
    fs.createReadStream(rutaArchivo)
        .pipe(csv())
        .on('data', async (row) => {
            rows.push(row);
            process.stdout.write(`Reading ${count++} rows \r`);
            console.log('Total records:', rows.length);
        })
        .on('end', () => {
            db.tx(t => {
                const queries = rows.map(row => {
                    process.stdout.write(`Creando ${count++} queries \r`);
                    return t.none('INSERT INTO credit_table VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [
                        parseInt(row.Age),
                        row.Gender,
                        parseFloat(row.Income),
                        parseInt(row.CreditScore),
                        parseInt(row.CreditHistoryLength),
                        parseInt(row.NumberOfExistingLoans),
                        parseFloat(row.LoanAmount),
                        parseInt(row.LoanTenure),
                        row.ExistingCustomer,
                        row.State,
                        row.City,
                        parseFloat(row.LTVRatio),
                        row.EmploymentProfile,
                        parseInt(row.ProfileScore),
                        row.Occupation
                    ]);
                });
                console.log(`Running ${queries.length} queries...`);
                return t.batch(queries);
            })
                .then(data => {
                    // SUCCESS
                    // data = array of null-s
                    console.log('Proceso completado.');
                    pgp.end(); // Cierra la conexión a la base de datos cuando haya terminado.
                })
                .catch(error => {
                    // ERROR
                    console.error('Error en proceso:', error);
                    pgp.end(); // Cierra la conexión a la base de datos cuando haya terminado.
                });
        });
}

let loadDataFromCsv = (csvFile) => {
    let rowCount = 0;
    let rows = [];

    fs.createReadStream(csvFile)
        .pipe(csv())
        .on('data', (row) => {
            if (!row) return;
            rows.push({
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
            process.stdout.write(`Reading ${rowCount++} rows \r`);
        })
        .on('end', async () => {
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


            // generating a multi-row insert query:
            console.log('Creando query with', rows.length, 'records');
            const query = pgp.helpers.insert(rows, cs);
            //=> INSERT INTO "tmp"("col_a","col_b") VALUES('a1','b1'),('a2','b2')

            // executing the query:
            console.log('Running query...');
            await db.none(query);
            console.log('Proceso completado.');
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
