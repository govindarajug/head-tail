const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, delimiter, count) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const headMain = function (readFileSync, fileName, count, delimiter) {
  return head(readFileSync(fileName, 'utf8'), delimiter, count);
};

exports.head = head;
exports.headMain = headMain;
