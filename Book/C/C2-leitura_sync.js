const fs = require('fs')

const leituraSync = function(file){

    console.log('fazendo leitura assincrona');

    let inicio = new Date().getTime();

    fs.readFile(file)

    let fim = new Date().getTime();

    console.log(`Bloqueio assincrono: ${ fim - inicio }ms`)
};

module.exports = leituraSync