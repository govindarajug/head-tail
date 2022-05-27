const argsIterator = function (args) {
  const currentArg = function () {
    return args[this.index];
  };
  const nextArg = function () {
    this.index++;
    return args[this.index];
  };
  const hasMoreArgs = function () {
    return this.index < this.args.length;
  };
  const iterator = {};
  iterator.index = 0;
  iterator.currentArg = currentArg.bind(iterator);
  iterator.nextArg = nextArg.bind(iterator);
  iterator.hasMoreArgs = hasMoreArgs.bind(iterator);
  iterator.args = args;
  return iterator;
};

const isValidFlag = (option) => ['-n', '-c'].includes(option);
const isValidCount = function (count) {
  return isFinite(count) && count !== 0;
};

const usageError = () => {
  return { message: 'usage: head [-n lines | -c bytes] [file ...]' };
};

const inValidOptionError = (option) => {
  return {
    message: `head: illegal option -- ${option[1]}\n${usageError().message}`
  };
};

const inValidCountError = (option, count) => {
  const map = { '-n': 'lines', '-c': 'bytes' };
  return {
    message: `head: illegal ${map[option]} count -- ${count}`
  };
};

const inValidCombinationError = () => {
  return {
    message: 'head: can\'t combine line and byte counts'
  };
};

const parseFileName = function (iterator) {
  if (iterator.index === iterator.args.length) {
    throw usageError();
  }
  return iterator.args.slice([iterator.index]);
};

const parseFlag = function (option) {
  if (!isValidFlag(option)) {
    throw inValidOptionError(option);
  }
  const map = {'-n': 'lines', '-c': 'bytes'};
  return map[option];
};

const parseCount = function (count, option) {
  if (!isValidCount(+count)) {
    throw inValidCountError(option, count);
  }
  return +count;
};

const isOption = (arg) => arg.startsWith('-');

const splitArg = function (arg) {
  if (isFinite(arg.slice(1))) {
    return ['-n', arg.slice(1)];
  }
  return [arg.slice(0, 2), arg.slice(2)];
};

const splitArgs = function (args) {
  const splittedArgs = args.flatMap(arg => isOption(arg) ? splitArg(arg) : arg);
  return splittedArgs.filter(arg => arg);
};

const throwIfBothOptionsPresent = (args) => {
  if (args.includes('-n') && args.includes('-c')) {
    throw inValidCombinationError();
  }
};

const parseOption = function (flag, count) {
  return { option: parseFlag(flag), count: parseCount(count, flag) };
};

const parseArgs = function (rawArgs) {
  let options = { option: 'lines', count: 10 };
  const args = splitArgs(rawArgs);
  throwIfBothOptionsPresent(args);
  const iterator = argsIterator(args);
  while (iterator.hasMoreArgs() && isOption(iterator.currentArg())) {
    options = parseOption(iterator.currentArg(), iterator.nextArg());
    iterator.nextArg();
  }
  const fileNames = parseFileName(iterator);
  return { fileNames, options };
};

exports.parseArgs = parseArgs;
exports.splitArgs = splitArgs;
exports.isOption = isOption;
