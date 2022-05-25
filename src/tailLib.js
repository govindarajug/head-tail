const lastNLines = function (content, count) {
  const lines = content.split('\n');
  return lines.slice(lines.length - count).join('\n');
};

const lastNBytes = (content, count) => {
  return content.slice(content.length - count);
};

const tail = function (content, option, count) {
  if (option === '-c') {
    return lastNBytes(content, count);
  }
  return lastNLines(content, count);
};

exports.tail = tail;
exports.lastNLines = lastNLines;
exports.lastNBytes = lastNBytes;
