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

const parseOption = function (iterator) {
  if (!isValidOption(iterator.currentArg())) {
    throw {
      message: `head: illegal option -- ${iterator.currentArg().slice(1)}`
    };
  }
  let option = 'lines';
  if (iterator.currentArg() === '-c') {
    option = 'bytes';
  }
  const count = +iterator.nextArg();
  return { option, count };
};

const parseArgs = function (args) {
  let options = { option: 'lines', count: 10 };
  const usage = 'usage: head [-n lines | -c bytes] [file ...]';
  if (args.length === 0) {
    throw {
      message: usage
    };
  }
  const iterator = argsIterator(args);
  while (iterator.hasMoreArgs() && iterator.currentArg().startsWith('-')) {
    try {
      options = parseOption(iterator);
    } catch (error) {
      throw {
        message: `${error.message}\n${usage}`
      };
    } 
    iterator.index++;
  }
  const fileName = parseFileName(iterator);
  return { fileName, options };
};

exports.parseArgs = parseArgs;
