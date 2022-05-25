const lastNLines = function (content, count) {
  const lines = content.split('\n');
  return lines.slice(lines.length - count).join('\n');
};

const tail = function (content, option, count) {
  if (option === '-c') {
    return content.slice(content.length - count);
  }
  return lastNLines(content, count);
};

exports.tail = tail;
exports.lastNLines = lastNLines;
