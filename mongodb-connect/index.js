const fs = require('fs');
const csv = require('csv-parser');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost:27017"; // Cambia esta URI según tu configuración de MongoDB
const dbName = 'miBaseDeDatos'; // Cambia esto al nombre de tu base de datos

let insertDataToMongoDB = async (data) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('miColeccion'); // Cambia 'miColeccion' al nombre de tu colección

        // Inserta los registros en la colección
        await collection.insertMany(data);

        console.log('Registros insertados correctamente en MongoDB.');
    } finally {
        client.close();
    }
}


let readDataFromCSV = async (csvFile) => {
    const data = [];
    fs.createReadStream(csvFile)
        .pipe(csv())
        .on('data', (row) => {
            data.push(row);
        })
        .on('end', () => {
            insertDataToMongoDB(data);
        });

}



