let fs = require('fs');
let data = require('./data.json');

if(!Array.isArray(data)) {
    console.error('data.json is not an array');
    return;
}

let dataOrderdered = data.sort((a, b) => {
    return a.parameterKey.localeCompare(b.parameterKey);
});

fs.writeFile('data-ordered.json',
    JSON.stringify(dataOrderdered, null, 4),
    (err) => { console.error(err) });
