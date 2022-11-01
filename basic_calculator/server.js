const http = require('http');
const app = require('./app');

const port = 3344;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server Running at ${port}`)
})