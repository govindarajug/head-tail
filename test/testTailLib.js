const assert = require('assert');
const { tail, lastNLines, lastNBytes } = require('../src/tailLib');

describe('tail', () => {
  it('Should return the file content', () => {
    assert.strictEqual(tail('hello'), 'hello');
  });

  it('Should return last 2 lines of the content', () => {
    assert.strictEqual(tail('a\nb\nc\nd', '-n', 2), 'c\nd');
    assert.strictEqual(tail('a\nb\nc\nd\ne', '-n', 2), 'd\ne');
  });
  
  it('Should return last 2 bytes of the content', () => {
    assert.strictEqual(tail('abcd', '-c', 2), 'cd');
    assert.strictEqual(tail('abcde', '-c', 2), 'de');
  });
});

describe('lastNLines', () => {
  it('Should return last 2 lines of the content', () => {
    assert.strictEqual(lastNLines('a\nb\nc', 2), 'b\nc');
    assert.strictEqual(lastNLines('a\nb\nc\nd\ne', 2), 'd\ne');
  });
});

describe('lastNBytes', () => {
  it('Should return last 2 bytes of the content', () => {
    assert.strictEqual(lastNBytes('abc', 2), 'bc');
    assert.strictEqual(lastNBytes('abcde', 2), 'de');
  });
});
