const assert = require('assert');
const { parseArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it('Should parse just the file name', () => {
    assert.deepStrictEqual(parseArgs(['a.txt']), { fileName: 'a.txt', delimiter: '\n', count: '10' });
  });

  it('Should parse -n option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-n', '2', 'a.txt']), { fileName: 'a.txt', delimiter: '\n', count: '2' });
  });

  it('Should parse -c option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-c', '3', 'a.txt']), { fileName: 'a.txt', delimiter: '', count: '3' });
  });
});
