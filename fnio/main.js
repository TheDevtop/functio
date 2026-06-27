/*
    Functio: Program entrypoint and startup
    Thijs Haker
*/

const server = require("./server");
const sched = require("./sched");
const store = require("./store");

// Print the banner

const banner = `
░█▀▀░█▀█░▄▀░░▀█▀░█▀█░▀▄░
░█▀▀░█░█░█░░░░█░░█░█░░█░
░▀░░░▀░▀░░▀░░▀▀▀░▀▀▀░▀░░
`;

console.log(banner);

// Start subsystems
store.startStore(process.env.DATA_DIR);
sched.startSched(Boolean(process.env.RESTART));
server.startServer(process.env.PORT);

// Define the stop function
const halt = (sig) => {
    server.stopServer();
    sched.stopSched();
    store.stopStore();

    console.warn("Halted on:", sig);
    process.exit(0);
};

// Wait for stop signals
process.on('SIGTERM', () => halt('SIGTERM'));
process.on('SIGINT', () => halt('SIGINT'));
