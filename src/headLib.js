const sliceUpto = (list, count) => list.slice(0, count);
const splitLines = (content) => content.split('\n');
const joinLines = (lines) => lines.join('\n');

const head = function (content, noOfLines) {
  const lines = splitLines(content);
  return joinLines(sliceUpto(lines, noOfLines));
};

exports.head = head;
exports.sliceUpto = sliceUpto;
