//Index.js
require('dotenv').config();
const http = require('http');
const { serverPort } = require('./config');
const { app } = require('./app');

const server = http.createServer(app);

server.listen(serverPort, () => {});
