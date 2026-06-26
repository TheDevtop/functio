/*
    Functio: Datastore
    Thijs Haker
*/

const { ClassicLevel } = require('classic-level');

var db;

exports.startStore = (path) => {
    db = new ClassicLevel(path, { valueEncoding: 'json' });
    console.info("Started store in directory:", path);
};

exports.stopStore = () => {
    db.close();
    console.info("Stopped store");
};
