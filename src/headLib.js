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

const headOfFile = (fileName, options, readFile, header) => {
  const result = fileReader(fileName, readFile);
  result.fileName = fileName;
  if (result.error) {
    return result;
  }
  result.content = head(result.content, options);
  result.header = header(result.fileName);
  return result;
};

const print = (logger, result) => {
  if (result.error) {
    logger.error(result.error.message);
    return;
  }
  logger.log(result.header + result.content);
};

const multiFileHeader = (fileName) => `==> ${fileName} <==\n`;

const selectHeader = (fileNames) => {
  let header = () => '';
  if (fileNames.length > 1) {
    header = multiFileHeader;
  }
  return header;
};

const headMain = (logger, readFile, ...args) => {
  const { fileNames, options } = parseArgs(args);
  const header = selectHeader(fileNames);

  const headOfFiles = fileNames.map(file =>
    headOfFile(file, options, readFile, header));
  
  headOfFiles.map((content) => print(logger, content));
};

exports.head = head;
exports.headMain = headMain;
exports.multiFileHeader = multiFileHeader;
