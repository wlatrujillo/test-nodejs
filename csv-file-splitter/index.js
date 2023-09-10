import fs from 'fs';
import readline from 'readline';
import events from 'events';


let splitCsv = async (rutaArchivo, size, hasHeader) => {

    let hasHeader = hasHeader || true;
    let size = size || 10000;

    if (size <= 0) {
        console.log('El tamaño debe ser mayor a 0');
        return;
    }

    if (!fs.existsSync(rutaArchivo)) {
        console.log('El archivo no existe');
        return;
    }

    if (!fs.existsSync('./csv-files')) {
        fs.mkdirSync('./csv-files');
    }

    let rowCount = 0;
    let fileCount = 0;
    let header = '';
    try {


        const rl = readline.createInterface({
            input: fs.createReadStream(rutaArchivo),
            crlfDelay: Infinity
        });

        rl.on('line', (line) => {

            if (hasHeader && rowCount === 0) {
                header = line;
            }

            if (rowCount % size === 0) {
                console.log('Creating new file');
                fileCount++;
                fs.openSync(`./csv-files/file_${fileCount}.csv`, 'w');
                if (hasHeader) {
                    fs.appendFileSync(`./csv-files/file_${fileCount}.csv`, `${header}\n`);
                    rowCount++;
                    return;
                }
            }

            fs.appendFileSync(`./csv-files/file_${fileCount}.csv`, `${line}\n`);
            rowCount++;
        });

        await events.once(rl, 'close');

        console.log('Reading file line by line with readline done.');
        const used = process.memoryUsage().heapUsed / 1024 / 1024;
        console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
    } catch (err) {
        console.error(err);
    }
}

if (process.argv[2] && process.argv[2] === '-f') {
    console.log('Reading file:', process.argv[3]);
    let size = 10000;
    let hasHeader = true;
    splitCsv(process.argv[3], size, hasHeader);
} else {
    console.error('Flag -f with file name is required example: node index -f data.csv')
}
