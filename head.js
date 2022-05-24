const fs = require('fs');
const { headMain } = require('./src/headLib.js');

const main = () => {
  const log = console.log;
  const error = console.error;
  try {
    headMain({ log, error }, fs.readFileSync, ...process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
  }
};

main();
