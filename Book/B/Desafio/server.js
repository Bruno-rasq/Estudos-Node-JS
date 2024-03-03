const HTTP = require('http');
const URL = require('url');
const PATH = require('path')
const FS = require('fs');
const PORT = 3000;

const Router = (pathname) => {
    if(pathname && pathname !== "/"){

        const file = PATH.join(__dirname, `${pathname}.html`);
        const exists = FS.existsSync(file);

        if(exists){
            return file
        }

        return PATH.join(__dirname, 'erro.html')
    }

    return PATH.join(__dirname, 'artigos.html')
}

const server = HTTP.createServer((request, response) => {

    const Path = URL.parse(request.url).pathname;
    const page = Router(Path);

    FS.readFile(page, (err, html) => {

        response.writeHead(200, {"Content-type": "text/html"});
        response.write(html);
        response.end();
    })

})

server.listen(PORT, () => console.log('Server is running...'))