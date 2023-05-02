const { log } = require('console');
const http = require ('http');


const server = http.createServer(function (req,res) {

    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.write('Hi, welcome Hary selamat anda berhasil membuat server dengan <b>NodeJS</b>')
})


server.listen(8000);


console.log('Server running on port 8000');