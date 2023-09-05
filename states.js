const os = require('os');
const log = require('./logger'); // importando a função log de logger.js

const { freemem, totalmem } = os;

const mem = parseInt(freemem() / 1024 / 1024);
const total = parseInt(totalmem() / 1024 / 1024);
const percents = parseInt((mem / total) * 100);

const states = {
    free: `${mem}MB`,
    total: `${total}MB`,
    usage: `${percents}%`
};

console.log("=== PC stats ===");
console.table(states);
log("rodando...")


// Minha versão do Node não está limpando o terminal antes de imprimir a nova tabela

// setInterval(() => {

//     const { freemem, totalmem } = os;

//     const mem = parseInt(freemem() /1024 / 1024);
//     const total = parseInt(totalmem() /1024 / 1024);
//     const percents = parseInt((mem / total) * 100);

//     const states = {
//         free: `${mem}MB`,
//         total: `${total}MB`,
//         usage: `${percents}%`
//     };

//     console.clear();
//     console.log("=== PC stats ===");
//     console.table(states);

// }, 1000);

