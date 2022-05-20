const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, delimiter, noOfLines) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, noOfLines), delimiter);
};

const headMain = function (fileName, readFileSync) {
  return head(readFileSync(fileName, 'utf8'), '\n', '10');
};

exports.head = head;
exports.headMain = headMain;
