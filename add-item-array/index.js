let fs = require('fs');



module.exports.addItemIfNotExists = addItemIfNotExists;

readFile();

function readFile() {
    let data = require('./data.json');

    let result = addItemIfNotExists(data['%jobTable%']);

    console.info('countReplacements :', result.countReplacements);
    if (result.countReplacements > 0) {
        console.info('Replacing file');
        data['%jobTable%'] = result.items;
        fs.writeFile('data.json',
            JSON.stringify(data, null, 4),
            (err) => { console.error(err) });
    }



}

function addItemIfNotExists(arr) {

    let count = 0;
    let items =
        arr
            .map(x => {

                if (x.PutRequest.Item.configuration.M['reprocessable'] != undefined) {
                    return x
                } else {
                    count++;
                    console.log("Item Before", x.PutRequest.Item)
                    x.PutRequest.Item.configuration.M['reprocessable'] = {
                        "BOOL": true
                    };
                    console.log("Item After", x.PutRequest.Item)
                    return x;
                }

            });

    return {
        items: items,
        countReplacements: count
    };

}
