/*
    Functio: Server and API
    Thijs Haker
*/

const express = require('express');
const srv = express();

srv.get('/', (req, res) => {
  res.send('Fn(io)');
});

exports.startServer = (port) => {
    srv.listen(port, () => {
        console.info("Started server on port:", port)
    });
};

exports.stopServer = () => {
    console.info("Stopped server");
};
