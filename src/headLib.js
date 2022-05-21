const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, delimiter, noOfLines) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, noOfLines), delimiter);
};

const headMain = function (readFileSync, fileName, count) {
  return head(readFileSync(fileName, 'utf8'), '\n', count);
};

exports.head = head;
exports.headMain = headMain;
