// SIMPLE SERVER EXAMPLE

const http = require('http');

http.createServer((request, response) => {

    // escreve no cabeçalho do site o status
    response.writeHead(200, {
        'content-type': 'text/plan'
    });

    response.write('Hey \n what`s up world!'); // o que será respondido

    response.end(); // finalizando a resposta


}).listen(1337, () => console.log('server is running...')); // servidor escutando a porta 1337