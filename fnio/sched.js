/*
    Functio: Scheduler and job control
    Thijs Haker
*/

const bree = require('bree');
const fs = require('fs');
const path = require('path');

let bq
const modMap = new Map();

// exports.startSched = (path, restart) => {
//     bq = new bree({
//         root: false,
//         silenceRootCheckError: true,
//         doRootCheck: false,
//     });
//     if (restart == true) {
//         bq.start();
//     }
//     console.info("Started scheduler, restart policy:", restart);
// };

// Load module into modMap
const loadMod = (path) => {
    const mod = require(path);
    modMap.set(mod.Name, mod);
    console.info(`Loaded ${mod.Name}, from ${path}`);
};

// Iterate over all files in path, try to load file as module
exports.startSched = (path, restart) => {
    try {
        const flist = fs.readdirSync(path);
        flist.forEach(file => {
            const fullPath = path.join(dirPath, file);
            if (fs.lstatSync(fullPath).isFile()) {
                loadMod(fullPath);
            }
        });
    } catch (error) {
        console.error("Error while starting scheduler:", error);
    }
    console.info(`Started scheduler; path: ${path}, restart policy: ${restart}`);
};

exports.stopSched = () => {
    //bq.stop();
    modMap.clear();
    console.info("Stopped scheduler");
};

// Get module 
exports.exec = async (cmd, ...args) => {
    const defErr = `Command not found: ${cmd}`;
    let result = "";

    if (!modMap.has(cmd)) {
        console.error(defErr);
        return defErr;
    }

    try {
        const mod = modMap.get(cmd);
        result = mod.Func(...args);
    } catch (error) {
        console.error("Execution error:", error);
        result = error;
    }

    return result;
};
