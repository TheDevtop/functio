/*
    Functio: Server and API
    Thijs Haker
*/

const express = require('express');

const appRouter = express();
var srv;

appRouter.get('/', (req, res) => {
  res.send('Fn(io)');
});


exports.startServer = (port) => {
    srv = appRouter.listen(port, () => {
        console.info("Started server on port:", port)
    });
};

exports.stopServer = () => {
    srv.close();
    console.info("Stopped server");
};
