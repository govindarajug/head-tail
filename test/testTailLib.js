const assert = require('assert');
const { tail, lastNLines } = require('../src/tailLib');

describe('tail', () => {
  it('Should return the file content', () => {
    assert.strictEqual(tail('hello'), 'hello');
  });

  it('Should return last 2 lines of the content', () => {
    assert.strictEqual(tail('a\nb\nc\nd', '-n', 2), 'c\nd');
    assert.strictEqual(tail('a\nb\nc\nd\ne', '-n', 2), 'd\ne');
  });
});

describe('lastNLines', () => {
  it('Should return last 2 lines of the content', () => {
    assert.strictEqual(lastNLines('a\nb\nc', 2), 'b\nc');
    assert.strictEqual(lastNLines('a\nb\nc\nd\ne', 2), 'd\ne');
  });
});
