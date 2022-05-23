const assert = require('assert');
const { parseArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it.only('Should show usage when no args are given', () => {
    assert.throws(() => parseArgs([]), 'usage: head [-n lines | -c bytes] [file ...]');
  });

  it.only('Should parse just the file name', () => {
    assert.deepStrictEqual(parseArgs(['a.txt']), { fileName: 'a.txt', options: { option: 'lines', count: 10 } });
  });

  it.only('Should parse -n option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-n', '2', 'a.txt']), { fileName: 'a.txt', options: { option: 'lines', count: 2 } });
  });
  
  it('Should parse latest value  of option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-n', '2', '-n', '3', 'a.txt']), { fileName: 'a.txt', options: { option: 'lines', count: 3 } });
    assert.deepStrictEqual(parseArgs(['-c', '2', '-c', '1', 'a.txt']), { fileName: 'a.txt', options: { option: 'bytes', count: 1 } });
  });

  it.only('Should parse -c option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-c', '3', 'a.txt']), { fileName: 'a.txt', options: { option: 'bytes', count: 3 } });
  });

  it('Should give illegal option error for option not starting with -', () => {
    assert.throws(() => parseArgs(['f', '3', 'a.txt']), { message: '-- illegal option'});
    assert.throws(() => parseArgs(['m', '3', 'a.txt']), { message: '-- illegal option'});
  });
});
