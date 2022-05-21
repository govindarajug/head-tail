const assert = require('assert');
const { head } = require('../src/headLib.js');

describe('head', () => {
  it('Should return content', () => {
    assert.strictEqual(head('hello', '\n', 10), 'hello');
    assert.strictEqual(head('hello\nbye', '\n', 10), 'hello\nbye');
  });

  it('Should return only first 10 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', '\n', 10), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj', '\n', 10), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
  });

  it('Should return only first 5 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', '\n', 5), 'a\nb\nc\nd\ne');
  });

  it('Should return only number of characters mentioned in content', () => {
    assert.strictEqual(head('abc', '', 1), 'a');
    assert.strictEqual(head('abc', '', 2), 'ab');
    assert.strictEqual(head('a\nc', '', 2), 'a\n');
  });
});
