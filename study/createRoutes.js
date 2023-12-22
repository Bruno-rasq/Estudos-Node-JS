const http = require('http');
const url = require('url');
const PORT = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {

    res.writeHead(200, {'content-type': 'text/html'});

    res.write(req.url)

    const param = url.parse(req.url, true).query;

    res.write('</br>' + param.name)
    res.write('</br>' + param.ext)

    res.end();
})

server.listen(PORT, host, () => console.log('Server is running...'));



// const http = require('http');
// const PORT = 3000;
// const host = '127.0.0.1';

// const server = http.createServer((req, res) => {

//     res.writeHead(200, {'content-type': 'text/html'});

//     // req.url === / é a requisição raiz, host(root)
//     if(req.url === '/'){
//         res.write('<h1>Page root.</h1>')

//     } else if(req.url === '/pag2'){
//         res.write('<h1>Page 2.</h1>')

//     } else  if (req.url === '/pag3'){
//         res.write('<h1>Page 3.</h1>')
//     }

//     res.end();
// })

// server.listen(PORT, host, () => console.log('Server is running...'));