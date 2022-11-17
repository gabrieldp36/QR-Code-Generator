const fs = require('fs');

const grabarDB = (stringsQRs) => {

    try {

        let dataCsv = '';

        stringsQRs.forEach( (cadenaCaracteres) => dataCsv += `${cadenaCaracteres}\n`);

        fs.writeFileSync('./db/data.csv', dataCsv);

    } catch(error) {

        throw new Error(error);
    };
};

module.exports = {
    grabarDB
}