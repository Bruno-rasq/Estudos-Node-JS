const http = require('http');
const PORT = 3000;

const App = (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    
    if(request.url == "/"){
        response.write("<h1> pagina principal! </h1>")

    } else if (request.url == "/bemvindo"){
        response.write("<h1> Bem-vindo! </h1>")

    } else {
        response.write("<h1> Pagina nao encontrada </h1>")
    }

    response.end();
}

const server = http.createServer(App)

server.listen(PORT, () => console.log(`Server is runnig... port: ${PORT}`))