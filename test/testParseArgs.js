const assert = require('assert');
const { parseArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it('Should parse just the file name', () => {
    assert.deepStrictEqual(parseArgs(['a.txt']), { fileName: 'a.txt', delimiter: '\n', count: '10' });
  });
});
