const assert = require('assert');
const { tail, lastNLines, lastNBytes } = require('../src/tailLib');

describe('tail', () => {
  it('Should return the file content', () => {
    assert.strictEqual(tail('hello', { option: 'lines', count: 10 }), 'hello');
  });

  it('Should return last 2 lines of the content', () => {
    assert.strictEqual(tail('a\nb\nc\nd', { option: 'lines', count: 2 }), 'c\nd');
    assert.strictEqual(tail('a\nb\nc\nd\ne', { option: 'lines', count: 2 }), 'd\ne');
  });
  
  it('Should return last 2 bytes of the content', () => {
    assert.strictEqual(tail('abcd', { option: 'bytes', count: 2 }), 'cd');
    assert.strictEqual(tail('abcde', { option: 'bytes', count: 2 }), 'de');
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
