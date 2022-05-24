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

const parseFileName = function (iterator) {
  return iterator.args[iterator.index];
};

const isValidOption = (option) => ['-n', '-c'].includes(option);
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
  return {
    message: `head: illegal ${option} count -- ${count}`
  };
};

const invalidCombinationError = () => {
  return {
    message: 'head: can\'t combine line and byte counts'
  };
};

const parseOption = function (option) {
  if (!isValidOption(option)) {
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

const isOption = (option) => option.startsWith('-');

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
    throw invalidCombinationError();
  }
};

const parseArgs = function (args) {
  const options = { option: 'lines', count: 10 };
  if (args.length === 0) {
    throw usageError();
  }
  const splittedArgs = splitArgs(args);
  throwIfBothOptionsPresent(splittedArgs);
  const iterator = argsIterator(splittedArgs);
  while (iterator.hasMoreArgs() && isOption(iterator.currentArg())) {
    options.option = parseOption(iterator.currentArg());
    options.count = parseCount(iterator.nextArg(), options.option);
    iterator.index++;
  }
  const fileName = parseFileName(iterator);
  return { fileName, options };
};

exports.parseArgs = parseArgs;
exports.splitArgs = splitArgs;
