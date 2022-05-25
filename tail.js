const fs = require('fs');
const { tail } = require('./src/tailLib.js');

const main = function () {
  const args = process.argv.slice(2);
  const opt = args[0];
  const count = args[1];
  let content;
  try {
    content = fs.readFileSync(args[2], 'utf8');
  } catch (error) {
    throw {
      name: 'FileReadError',
      message: `${args[2]}: No such file or directory`
    };
  }
  return tail(content, opt, count);
};

console.log(main());
