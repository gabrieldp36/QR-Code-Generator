const fs = require('fs');

const verificarReseteo = async (resetear) => {

    try {

        if(resetear === 'true') {

            process.env.DIRECTORIO = 1;

            process.env.QRNUMERO = 0;

            fs.rmdirSync('./jobs', {recursive: true});

            fs.mkdirSync('./jobs');
        };

    } catch(error) {

        return Promise.reject(new Error(error));
    };
};

module.exports = {
    verificarReseteo
}