const { parseArgs } = require('./parseArgs.js');
const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, { option, count }) {
  const delimiter = { lines: '\n', bytes: '' }[option];
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const processFile = function (options, fileName, readFileSync, formatter) {
  const result = { fileName };
  try {
    result.content = head(readFileSync(fileName, 'utf8'), options);
    result.format = formatter(result);
  } catch (error) {
    result.error = {
      name: 'FileReadError',
      message: `${fileName}: No such file or directory`
    };
  }
  return result;
};

const print = function (logger, result) {
  if (result.error !== undefined) {
    logger.error(result.error.message);
    return;
  }
  logger.log(result.format + result.content);
};

const printResult = function (logger, result) {
  result.map((content) => print(logger, content));
};

const multiFileFormat = function (content) {
  return `==> ${content.fileName} <==\n`;
};

const headMain = function (logger, readFile, ...args) {
  const { fileNames, options } = parseArgs(args);
  let formatter = () => '';
  if (fileNames.length > 1) {
    formatter = multiFileFormat;
  }
  const result = fileNames.map(file =>
    processFile(options, file, readFile, formatter));
  printResult(logger, result);
};

exports.head = head;
exports.headMain = headMain;
