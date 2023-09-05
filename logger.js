// const eventEmitter = require('events'); Não funcionou na aula :(
const { EventEmitter } = require('stream');

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    console.log(message)
});


function log(message){

    emitter.emit('log', message);

};

// log("mensagem teste 2");

module.exports = log; //exportando a função log 