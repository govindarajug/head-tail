const sliceUpto = (list, count) => list.slice(0, count);
const splitBy = (content, delimiter) => content.split(delimiter);
const joinLines = (lines) => lines.join('\n');

const head = function (content, delimiter, noOfLines) {
  const lines = splitBy(content, delimiter);
  return joinLines(sliceUpto(lines, noOfLines));
};

exports.head = head;
exports.sliceUpto = sliceUpto;
