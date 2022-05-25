const { headMain } = require('./src/headLib.js');
const { main } = require('./main.js');

main(headMain, ...process.argv.slice(2));
