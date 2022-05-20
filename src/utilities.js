const sliceUpto = (list, count) => list.slice(0, count);
const splitBy = (content, delimiter) => content.split(delimiter);
const joinBy = (list, delimiter) => list.join(delimiter);

exports.sliceUpto = sliceUpto;
exports.splitBy = splitBy;
exports.joinBy = joinBy;
