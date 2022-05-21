const { parseArgs } = require('./parseArgs.js');
const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, delimiter, count) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const headMain = function (readFileSync, ...args) {
  const { fileName, delimiter, count } = parseArgs(args);
  return head(readFileSync(fileName, 'utf8'), delimiter, count);
};

exports.head = head;
exports.headMain = headMain;
