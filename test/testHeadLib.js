const assert = require('assert');
const { head } = require('../src/headLib.js');

describe('head', () => {
  it('Should return content', () => {
    assert.strictEqual(head('hello'), 'hello');
    assert.strictEqual(head('hello\nbye'), 'hello\nbye');
  });
});
