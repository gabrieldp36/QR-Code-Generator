const QRCode = require('qrcode');

const fs = require('fs');

let listadoQrs = '';

const crearQR = async (nroCarpeta, index, candenaCaracteres, color, fondo, formato) => {

  try {

    QRCode.toFile(`jobs/carpeta${nroCarpeta}/codigoQR_${index+1}.png`, candenaCaracteres, {
      color: {
        dark: color, // Color del código.
        light: fondo // Color de fondo.
      },
      type: formato
      }, (err) => {

      if (err) throw err;
    });

    listadoQrs += '   -'.yellow + ` El código "codigoQR_${index+1}", ha sido generado con éxtio.\n`.green;

    return Promise.resolve(listadoQrs);

  } catch(error) {

    return Promise.reject(new Error(error));
  };
}

const generadorQRs = async (stringsQR, numeroQRs, nroQRsPorCarpeta, colorQrs, fondoQRs, formatoQRs, directorioActual) => {

  try {

    let cantidadQRs = 0;

    let numeroCarpeta = process.env.DIRECTORIO*1;

    let listado = '';

    numeroQRs = (numeroQRs > stringsQR.length) ? stringsQR.length : numeroQRs;

    let i = 0;

    for(i = 0; i < numeroQRs; i++) {

      listado = await crearQR(numeroCarpeta, (process.env.QRNUMERO*1 + i), stringsQR[i], colorQrs, fondoQRs, formatoQRs);

      cantidadQRs += 1;

      if(cantidadQRs === nroQRsPorCarpeta) {
        numeroCarpeta += 1;
        cantidadQRs = 0;
      };
    };

    fs.writeFileSync('./.env', `DIRECTORIO=${directorioActual}\nQRNUMERO=${(process.env.QRNUMERO*1) + (i)}`);

    return Promise.resolve(listado);

  } catch(error) {

    return Promise.reject(new Error(error));
  }
};

module.exports = {
  generadorQRs
};

