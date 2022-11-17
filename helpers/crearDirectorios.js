const path = require('path');

const fs = require('fs');

const crearDirectorio = async (cantidadQrs, cantidadPorCarpeta) => {
  
  try {
    let i = 0;
    
    let directorioActual;

    let dir = path.join(__dirname, `../jobs/carpeta${(process.env.DIRECTORIO*1)}`);

    for(i = 0; i <= Math.ceil(cantidadQrs/cantidadPorCarpeta); i++) {

      if ( !fs.existsSync(dir) ) {

        fs.mkdirSync(dir);
      };

      dir = path.join(__dirname, `../jobs/carpeta${(process.env.DIRECTORIO*1) + i}`);
    }

    directorioActual = (process.env.DIRECTORIO*1) + (i-1);

    return Promise.resolve(directorioActual);

  } catch (error) {

    return Promise.reject(new Error(error));
  };
};

module.exports = {
  crearDirectorio
};
