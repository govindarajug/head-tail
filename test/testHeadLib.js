const assert = require('assert');
const { head } = require('../src/headLib.js');

describe('head', () => {
  it('Should return content', () => {
    assert.strictEqual(head('hello', { option: 'lines', count: 10 }), 'hello');
    assert.strictEqual(head('hello\nbye', { option: 'lines', count: 10 }), 'hello\nbye');
  });

  it('Should return only first 10 lines of content', () => {
    const actualContent = 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk';
    assert.strictEqual(head(actualContent, { option: 'lines', count: 10 }), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj', { option: 'lines', count: 10 }), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
  });

  it('Should return only first 5 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk', { option: 'lines', count: 5 }), 'a\nb\nc\nd\ne');
  });

  it('Should return only number of characters mentioned in content', () => {
    assert.strictEqual(head('abc', { option: 'bytes', count: 1 }), 'a');
    assert.strictEqual(head('abc', { option: 'bytes', count: 2 }), 'ab');
    assert.strictEqual(head('a\nc', { option: 'bytes', count: 2 }), 'a\n');
  });
});
