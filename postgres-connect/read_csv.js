import fs from 'fs';
import csv from 'csv-parser';

// Función para leer y cargar datos desde un archivo CSV
let cargarDatosDesdeCSV = (rutaArchivo) => {
    let count = 0;
    fs.createReadStream(rutaArchivo)
        .pipe(csv())
        .on('data', async (row) => {
            process.stdout.write(`Leyendo ${count++} filas \r\n`);
            console.log(row);
        })
        .on('end', () => {
            console.log('Finish process');
        });
}

// Llama a la función para cargar datos desde el archivo CSV
if (process.argv[2] && process.argv[2] === '-f') {
    console.log('Loading Data from:', process.argv[3]);
    cargarDatosDesdeCSV(process.argv[3]);
} else {
    console.error('Flag -f with file name is required example: node index -f data.csv')
}
