const tail = function (content, option, count) {
  return content.split('\n').slice(-count).join('\n');
};

exports.tail = tail;
