let http = require('http');
let PORT = 3000

const atendeRequisicao = (req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("<h1> Hello Server </h1>");
    res.end();
}

const server = http.createServer(atendeRequisicao);

const logServer = () => {
    console.log('Server is running...')
}

server.listen(PORT, logServer())