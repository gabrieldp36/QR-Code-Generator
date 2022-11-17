const fs = require('fs');

const leerDb = async () =>{

    const archivo = './db/data.csv';

    try {

        if ( !fs.existsSync(archivo) ) {

            throw `Por favor incluya en el directorio 'db' el siguiente archivo: data.csv.\nEste archivo debe contener los strings que se asignarán a cada uno de los QRs a crear.\n`;
        };

        const info = fs.readFileSync(archivo, {encoding: 'utf-8'});

        let data = info.split('\n');

        data = data.filter( (cadenaCaracteres) => cadenaCaracteres != '' );

        data = data.map( (cadenaCaracteres) => cadenaCaracteres.trim() );

        return Promise.resolve(data);

    } catch(error) {

        return Promise.reject(new Error(error));
    }
};

module.exports = {
    leerDb
};

