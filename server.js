const { log } = require('console');
const http = require ('http');


const server = http.createServer(function (req,res) {
    res.end('Hi, welcome Hary')
})


server.listen(8000);


console.log('Server running on port 8000');