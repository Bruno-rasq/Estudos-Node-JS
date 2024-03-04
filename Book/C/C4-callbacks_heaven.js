const fs = require('fs');

let lerDiretorios = () => {

    fs.readdir(__dirname, (err, diretorio) => {

        if( err ) return err

        diretorio.forEach((arquivo) => {
            ler(arquivo)
        })
    })
};

let ler = function(arquivo){

    let path = `./${arquivo}`;

    fs.stat(path, (err, stat) => {

        if( err ) return err;

        if(stat.isFile()){
            console.log('%s %d bytes', arquivo, stat.size)
        }
    })
};

lerDiretorios();