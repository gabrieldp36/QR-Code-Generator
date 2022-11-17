require('colors');

require('dotenv').config();

const argv = require('./config/yargs');

const {inicializarApp, leerDb, grabarDB, crearDirectorio, generadorQRs, verificarReseteo} = require('./helpers');

const main = async () => {

  try {

    let salida;

    let directorioActual;

    await verificarReseteo(argv.resetear);

    const stringsQR = await leerDb();

    const cantidadQRs = inicializarApp(argv.cantidad, stringsQR);

    if(stringsQR.length > 0) {

      directorioActual = await crearDirectorio(cantidadQRs, argv.carpeta);
      
      let listadoQR = await generadorQRs(stringsQR, cantidadQRs, argv.carpeta, argv.color, argv.fondo, argv.imagen, directorioActual);

      salida = {
        listadoQR,
        stringsQR,
        cantidadQRs
      };

    } else {

      salida = {
        stringsQR: [],
      };
    };

    return Promise.resolve(salida);

  } catch(error) {

    let mensaje = `${error.stack}\n`;

    return Promise.reject(mensaje);
  };
};

main().then( (salida) => {

  if(salida.stringsQR.length > 0) {

    console.log(salida.listadoQR);

    console.log('>> '.yellow + 'Operación concretada con éxito.'.cyan);

    console.log('\n>> '.yellow + 'Finalizando tareas. Espere a que se libere la terminal...\n'.magenta);

    salida.stringsQR.splice(0, salida.cantidadQRs);

    grabarDB(salida.stringsQR);

  } else {

    console.log('\n>> '.yellow + 'Fin del programa.\n'.magenta);
  }

}).catch( (error) => {

  console.log(`${error}`.red);
});

