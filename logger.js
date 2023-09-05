// const eventEmitter = require('events'); Não funcionou na aula :(
const { EventEmitter } = require('stream');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if (err) throw err
    })
});


function log(message){

    emitter.emit('log', message);

};

// log("mensagem teste 2");

module.exports = log; //exportando a função log 