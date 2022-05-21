const assert = require('assert');
const { sliceUpto, splitBy, joinBy } = require('../src/utilities.js');

describe('sliceUpto', () => {
  it('Should slice number of elements in array from start', () => {
    assert.deepStrictEqual(sliceUpto([1, 2], 1), [1]);
    assert.deepStrictEqual(sliceUpto([1, 2, 3, 4], 3), [1, 2, 3]);
  });
});

describe('joinBy', () => {
  it('Should join array elements by given delimiter', () => {
    assert.strictEqual(joinBy(['a', 'b'], '\n'), 'a\nb');
    assert.strictEqual(joinBy(['a', 'b', 'c'], ''), 'abc');
  });
});

describe('splitBy', () => {
  it('Should split content by newline', () => {
    assert.deepStrictEqual(splitBy('a\nb', '\n'), ['a', 'b']);
    assert.deepStrictEqual(splitBy('a', '\n'), ['a']);
  });

  it('Should split content by empty string', () => {
    assert.deepStrictEqual(splitBy('abc', ''), ['a', 'b', 'c']);
    assert.deepStrictEqual(splitBy('a', ''), ['a']);
  });
});
