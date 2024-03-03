const http = require('http');
const url = require('url');
const PORT = 3000;

const App = (request, response) => {

    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h1> Dados da query string! </h1>");

    let result = url.parse(request.url, true);

    for(let key in result.query){
        response.write(`<h1> ${key}: ${result.query[key]} </h1>`);
    }

    response.end();
}

const server = http.createServer(App)

server.listen(PORT, () => console.log(`Server is running in port ${PORT} `))