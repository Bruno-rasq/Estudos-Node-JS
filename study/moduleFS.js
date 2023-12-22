const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT

const server = http.createServer((req, res) => {

    fs.readFile('moduleFS.html', (err, arquivo) => {

        if(err)throw err

        res.writeHead(200, {'content-type': 'text/html'})
        res.write(arquivo)
        return res.end();
    })

})

server.listen(PORT || 3000, () => console.log('Server is running...'))