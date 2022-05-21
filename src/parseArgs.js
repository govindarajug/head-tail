const parseArgs = function (args) {
  const fileName = args[args.length - 1];
  const delimiter = args[0] === '-c' ? '' : '\n';
  const count = args[0].startsWith('-') ? args[1] : '10';
  
  return { fileName, delimiter, count };
};

exports.parseArgs = parseArgs;
