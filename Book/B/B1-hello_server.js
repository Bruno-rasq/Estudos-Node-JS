let http = require('http');
let PORT = 3000

let server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/html"});
    response.write("<h1> Hello Server </h1>");
    response.end();
})

server.listen(PORT)