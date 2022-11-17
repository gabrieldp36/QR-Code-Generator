const inicializarApp = (cantidadQRs, stringsQR) => {

    console.clear();

    if(stringsQR.length > 0) {

        console.log('=========================================================================='.green);
        console.log('                        Generardor de Códigos QRs'.white                   );
        console.log('==========================================================================\n'.green);

        if(cantidadQRs > stringsQR.length) {

            cantidadQRs = stringsQR.length;

            console.log( '>> '.yellow + `Se van a generar ${cantidadQRs} QRs, los cuales representan el total de QRs \nque existen en la base de datos (data.csv).`.magenta);

            console.log('>> '.yellow + 'Ejecutando tareas...\n'.cyan);

        } else {

            console.log('>> '.yellow + `Se van a generar ${cantidadQRs} QRs.\n`.magenta);

            console.log('>> '.yellow + 'Ejecutando tareas...\n'.cyan);
        }

        return cantidadQRs;

    } else {

        console.log('=========================================================================='.green);
        console.log('                        Generardor de Códigos QRs'.white                   );
        console.log('==========================================================================\n'.green);

        console.log( '>> '.yellow + `La base de datos (data.csv), se encuentra vacía. No hay QRs a generar.\n`.magenta);

        return 0;
    };
};

module.exports = {
    inicializarApp
};