const PORT = 5000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT, () => {
   console.log(`RestFul API is running on port ${PORT}`);
});
module.exports = server;
