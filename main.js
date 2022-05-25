const fs = require('fs');

const main = (funcToCall, ...args) => {
  const log = console.log;
  const error = console.error;
  try {
    funcToCall({ log, error }, fs.readFileSync, ...args);
  } catch (error) {
    console.error(error.message);
  }
};

exports.main = main;
