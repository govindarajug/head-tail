const fs = require('fs');

const main = (funcToCall, ...args) => {
  const { log, error } = console;
  try {
    funcToCall({ log, error }, fs.readFileSync, ...args);
  } catch (err) {
    error(err.message);
    process.exitCode = 1;
  }
};

exports.main = main;
