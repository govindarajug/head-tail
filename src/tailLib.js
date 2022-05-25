const { parseArgs, multiFileFormat, processFile, printResult } = require('./headLib.js');

const lastNLines = function (content, count) {
  const lines = content.split('\n');
  return lines.slice(lines.length - count).join('\n');
};

const lastNBytes = (content, count) => {
  return content.slice(content.length - count);
};

const tail = function (content, { option, count }) {
  if (option === 'bytes') {
    return lastNBytes(content, count);
  }
  return lastNLines(content, count);
};

const tailMain = function (logger, readFile, ...args) {
  const { fileNames, options } = parseArgs(args);
  let formatter = () => '';
  if (fileNames.length > 1) {
    formatter = multiFileFormat;
  }
  const fn = tail;
  const result = fileNames.map(file =>
    processFile(fn, options, file, readFile, formatter));
  printResult(logger, result);
};

exports.tail = tail;
exports.tailMain = tailMain;
exports.lastNLines = lastNLines;
exports.lastNBytes = lastNBytes;
