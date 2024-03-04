const http = require('http');
const fs = require('fs');
const leituraAsync = require('./C2-leitura_async');
const leituraSync = require('./C2-leitura_sync');
const leituraSync = require('./C2-leitura_sync');

const file = './node.exe';
const stream = fs.createWriteStream(file);
const download = 'http://nodejs.org/dist/latest/node.exe';

http.get(download, function(response){
    console.log('fazendo download do Nodejs');

    response.on('data', function(data){
        stream.write(data);
    });

    response.on('end', function(){
        stream.end();
        console.log("download finalizado");
        leituraAsync(file);
        leituraSync(file);
    });
});