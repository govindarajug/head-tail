const assert = require('assert');
const { head, sliceUpto } = require('../src/headLib.js');

describe('head', () => {
  it('Should return content', () => {
    assert.strictEqual(head('hello', 10), 'hello');
    assert.strictEqual(head('hello\nbye', 10), 'hello\nbye');
  });

  it('Should return only first 10 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', 10), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj', 10), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
  });

  it('Should return only first 5 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', 5), 'a\nb\nc\nd\ne');
  });
});

describe('sliceUpto', () => {
  it('Should slice number of elements in array from start', () => {
    assert.deepStrictEqual(sliceUpto([1, 2], 1), [1]);
    assert.deepStrictEqual(sliceUpto([1, 2, 3, 4], 3), [1, 2, 3]);
  });
});