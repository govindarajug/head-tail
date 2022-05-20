const sliceUpto = (list, count) => list.slice(0, count);

const splitBy = (content, delimiter) => content.split(delimiter);
const joinBy = (list, delimiter) => list.join(delimiter);

const head = function (content, delimiter, noOfLines) {
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, noOfLines), delimiter);
};

exports.head = head;
exports.sliceUpto = sliceUpto;
