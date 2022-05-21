const { parseArgs } = require('./parseArgs.js');
const { splitBy, joinBy, sliceUpto } = require('./utilities.js');

const head = function (content, { option, count }) {
  const delimiter = { lines: '\n', bytes: '' }[option];
  const lines = splitBy(content, delimiter);
  return joinBy(sliceUpto(lines, count), delimiter);
};

const headMain = function (readFileSync, ...args) {
  const { fileName, options } = parseArgs(args);
  let content;
  try {
    content = readFileSync(fileName, 'utf8');
  } catch (error) {
    throw {
      fileName,
      name: 'FileReadError',
      message: `Unable to read ${fileName}`
    };
  }
  return head(content, options);
};

exports.head = head;
exports.headMain = headMain;
