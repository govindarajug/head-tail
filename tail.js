const { tailMain } = require('./src/tailLib.js');
const { main } = require('./main.js');

main(tailMain, ...process.argv.slice(2));
