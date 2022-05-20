const sliceUptoTen = (list) => list.slice(0, 10);

const head = function (content) {
  return sliceUptoTen(content.split('\n')).join('\n');
};

exports.head = head;
