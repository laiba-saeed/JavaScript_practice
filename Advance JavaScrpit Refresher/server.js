const http = require('http')

const server = http.createServer(function(request, response) {
    console.log("I am inside server")
    response.write("<h1>You are at the write place</h1>")
    response.end();
})

server.listen(8000);  