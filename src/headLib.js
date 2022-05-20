const sliceUptoTen = (list) => list.slice(0, 10);
const splitLines = (content) => content.split('\n');
const joinLines = (lines) => lines.join('\n');

const head = function (content) {
  const lines = splitLines(content);
  return joinLines(sliceUptoTen(lines));
};

exports.head = head;
