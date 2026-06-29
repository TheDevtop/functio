/*
    Functio: Server and API
    Thijs Haker
*/

const express = require('express');
const sched = require('./sched');

const appRouter = express();
let srv;

appRouter.use(express.json());

appRouter.get('/health', (req, res) => {
    res.send('Fn(io)');
});

appRouter.post('/', (req, res) => {
    let cmd, args = null;
    if (req.body.length > 1) {
        cmd = req.body[0];
        args = req.body.slice(1);
    } else {
        cmd = req.body[0];
        args = [];
    }

    sched.exec(cmd, ...args).then(result => {
        res.send(result);
    }).catch(err => {
        console.error("Could not resolve promise:", err);
        res.send(err);
    });
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
