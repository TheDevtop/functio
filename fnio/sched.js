/*
    Functio: Scheduler and job control
    Thijs Haker
*/

const bree = require('bree');

var bq

exports.startSched = (restart) => {
    bq = new bree({
        root: false,
        silenceRootCheckError: true,
        doRootCheck: false,
    });
    if (restart == true) {
        bq.start();
    }
    console.info("Started scheduler, restart policy:", restart);
};

exports.stopSched = () => {
    bq.stop();
    console.info("Stopped scheduler");
};
