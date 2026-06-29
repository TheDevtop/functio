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
    let result = null;
    if (req.body.length > 1) {
        const args = req.body.slice(1);
        result = await sched.execNow(req.body[0], ...args);
    } else {
        result = await sched.execNow(req.body[0]);
    }
    res.json(result);
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
