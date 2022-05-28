const { parseArgs } = require('./parseArgs.js');
const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = (content, { option, count }) => {
  const delimiter = { lines: '\n', bytes: '' }[option];
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const fileReader = (fileName, readFile) => {
  const fileContent = {};
  try {
    fileContent.content = readFile(fileName, 'utf8');
  } catch (error) {
    fileContent.error = {
      name: 'FileReadError',
      message: `${fileName}: No such file or directory`
    };
  }
  return fileContent;
};

const processFile = (fn, options, fileName, readFile, header) => {
  const result = fileReader(fileName, readFile);
  result.fileName = fileName;
  if (result.error) {
    return result;
  }
  result.content = fn(result.content, options);
  result.header = header(result);
  return result;
};

const print = (logger, result) => {
  if (result.error) {
    logger.error(result.error.message);
    return;
  }
  logger.log(result.header + result.content);
};

const multiFileFormat = (content) => `==> ${content.fileName} <==\n`;

const headMain = (logger, readFile, ...args) => {
  const { fileNames, options } = parseArgs(args);
  let formatter = () => '';
  if (fileNames.length > 1) {
    formatter = multiFileFormat;
  }
  const result = fileNames.map(file =>
    processFile(head, options, file, readFile, formatter));

  result.map((content) => print(logger, content));
};

exports.head = head;
exports.headMain = headMain;
exports.parseArgs = parseArgs;
exports.multiFileFormat = multiFileFormat;
exports.processFile = processFile;
exports.print = print;
