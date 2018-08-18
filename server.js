const http =  require('http');
const app = require('./app');

const port = 7000; //psot at which to run the project 

const server = http.createServer(app);

server.listen(port);