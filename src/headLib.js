const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, delimiter, count) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const headMain = function (readFileSync, ...args) {
  const fileName = args[args.length - 1];
  const delimiter = args[0] === '-c' ? '' : '\n';
  const count = args[0].startsWith('-') ? args[1] : 10;
  return head(readFileSync(fileName, 'utf8'), delimiter, count);
};

exports.head = head;
exports.headMain = headMain;
