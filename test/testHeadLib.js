const assert = require('assert');
const { head } = require('../src/headLib.js');

describe('head', () => {
  it('Should return content', () => {
    assert.strictEqual(head('hello'), 'hello');
    assert.strictEqual(head('hello\nbye'), 'hello\nbye');
  });
  it('Should return only first 10 lines of content', () => {
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj\nk'), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
    assert.strictEqual(head('a\nb\nc\nd\ne\nf\ng\nh\ni\nj'), 'a\nb\nc\nd\ne\nf\ng\nh\ni\nj');
  });
});
