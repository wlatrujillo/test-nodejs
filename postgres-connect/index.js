import fs from 'fs';
import pgPromise from 'pg-promise';
import csv from 'csv-parser';
import bdConfig from './bd_config.json' assert { type: "json" };


// Configura la conexión a la base de datos
const pgp = pgPromise();
const db = pgp(bdConfig);

// Función para leer y cargar datos desde un archivo CSV
let cargarDatosDesdeCSV = (rutaArchivo) => {
    let count = 0;
    let rows = [];
    fs.createReadStream(rutaArchivo)
        .pipe(csv())
        .on('data', async (row) => {
            try {
                // Realiza la inserción en la base de datos
                /*await db.none('INSERT INTO credit_table VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [
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
                ]);*/
                //console.log('Fila insertada con éxito:', row);
                rows.push(row);
                process.stdout.write(`leyendo ${count++} filas \r`);
            } catch (error) {
                console.error('Error al leer fila:', error);
            }
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
                console.log('Ejecutando queries...');
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

// Llama a la función para cargar datos desde el archivo CSV
cargarDatosDesdeCSV('credit_data.csv');