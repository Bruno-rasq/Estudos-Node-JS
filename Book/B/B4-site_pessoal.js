const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((request, response) => {

    fs.readFile(__dirname + "/index.html", function(err, file){

        response.writeHead(200, {"Content-type": "text/html"});
        response.write(file);
        response.end();

    });
});

server.listen(PORT, () => console.log(`Server is running in port ${PORT}`));