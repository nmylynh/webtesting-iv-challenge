const express = require('express');
const server = express();
const configureMiddleware = require('./middleware/config-mw');
const admin = require('./routers/movies-router')

configureMiddleware(server);

server.get('/', (req, res) => {
    res.send(`<h2>HELLO THIS IS PATRICK</h2>`)
  });  


server.use('/api/movies', movies);

module.exports = server;