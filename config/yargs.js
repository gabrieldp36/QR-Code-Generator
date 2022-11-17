const argv = require('yargs')
.option('c', {
    alias: 'cantidad',
    type:'number',
    default: 8100,
    describe:'Representa la cantidad de QRs a ser generados.'
})
.option('ca', {
    alias: 'carpeta',
    type:'number',
    default: 200,
    describe:'Es el número de QRs que serán guardados por directorio.'
})
.option('co', {
    alias:'color',
    type: 'string',
    default: '#26FDC5',
    describe:"Representa el color con el que se creará el código QR. Se debe enviar el código hexadecimal del respectivo color. Ejemplo: '#26FDC5'"
})
.option('f', {
    alias:'fondo',
    type: 'string',
    default: '#973CCE',
    describe:"Representa el color de fondo de la imagen del código QR. Se debe enviar el código hexadecimal del respectivo color. Ejemplo: '#973CCE'"
})
.option('i', {
    alias:'imagen',
    type: 'string',
    default: 'png',
    describe:'Define el formato de imagen con el que se creará el QR. Se admiten únicamente los siguientes formatos: png o svg.'
})
.option('r', {
    alias:'resetear',
    type: 'string',
    default: 'false',
    describe:'Resetea el contador de carpetas y QRs generados hasta el momento, eliminando todos los directorios y QRs que hayan sido previamente creados.'
})
.check( (argv) => {

    if ( isNaN(argv.cantidad) ) {

        throw 'El argumento cantidad requiere un número.';

    } else if(argv.cantidad > 8100) {

        throw 'La cantidad máxima de QRs a ser generados por ejecución asciende al número de 8100 QRs.';

    } else if ( (argv.cantidad - Math.trunc(argv.cantidad)) > 0 || argv.cantidad <= 0) {

        throw 'El argumento cantidad debe ser un número entero positivo mayor o igual a 1.';

    } else if ( (argv.carpeta - Math.trunc(argv.carpeta)) > 0 || argv.carpeta <= 0) {

        throw 'El argumento carpeta debe ser un número entero positivo mayor o igual a 1.';

    } else if ( isNaN(argv.carpeta) ) {

        throw 'El argumento carpeta requiere un número.';

    } else if ( !(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(argv.color)) ) {

        throw 'El argumento color requiere un código de color hexadecimal válido.';
    
    } else if ( !(/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(argv.fondo)) ) {

        throw 'El argumento fondo requiere un código de color hexadecimal válido.';

    } else if (argv.imagen !== 'png' && argv.imagen !== 'svg') {

        throw 'El argumento imagen solo admite el formato png o svg.';

    } else if(argv.resetear !== 'true' && argv.resetear !== 'false' ) {

        throw 'El argumento resetear solo admite el valor true o false.';
    }

    return true

}).argv;

module.exports = argv;