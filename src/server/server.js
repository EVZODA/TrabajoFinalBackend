const express = require ("express");
const router = require ("../routes/routes");
const routeError = require("../utils.js/routerError");
const server = express();

server.use (express.json());
server.use('/api', router);
server.use(routeError)

module.exports = server;