const isOptionInvalid = option => !option.startsWith('-');

const parseArgs = function (args) {
  const fileName = args[args.length - 1];
  const keys = { '-n': 'lines', '-c': 'bytes' };
  const options = { option: 'lines', count: 10 };
  
  for (let index = 0; index < args.length - 1; index += 2) {
    const [option, value] = args.slice(index, index + 2);
    if (isOptionInvalid(option)) {
      throw {
        message: '-- illegal option'
      };
    }
    options.option = keys[option];
    options.count = isFinite(value) ? +value : value;
  }
  return { fileName, options };
};

exports.parseArgs = parseArgs;
