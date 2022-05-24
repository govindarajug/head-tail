const assert = require('assert');
const { parseArgs, splitArgs } = require('../src/parseArgs.js');

describe('parseArgs', () => {
  it('Should show usage when no args are given', () => {
    assert.throws(() => parseArgs([]), { message: 'usage: head [-n lines | -c bytes] [file ...]' });
  });

  it('Should parse just the file name in array', () => {
    assert.deepStrictEqual(parseArgs(['a.txt']), { fileNames: ['a.txt'], options: { option: 'lines', count: 10 } });
    assert.deepStrictEqual(parseArgs(['a.txt', 'b.txt']), { fileNames: ['a.txt', 'b.txt'], options: { option: 'lines', count: 10 } });
  });

  it('Should parse -n option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-n', '2', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'lines', count: 2 } });
  });
  
  it('Should parse latest value  of option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-n', '2', '-n', '3', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'lines', count: 3 } });
    assert.deepStrictEqual(parseArgs(['-c', '2', '-c', '1', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'bytes', count: 1 } });
  });

  it('Should parse -c option along with the file name', () => {
    assert.deepStrictEqual(parseArgs(['-c', '3', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'bytes', count: 3 } });
  });

  it('Should parse -number option as -n and number', () => {
    assert.deepStrictEqual(parseArgs(['-3', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'lines', count: 3 } });
    assert.deepStrictEqual(parseArgs(['-10', 'a.txt']), { fileNames: ['a.txt'], options: { option: 'lines', count: 10 } });
  });

  it('Should throw error when next argument to option is not a number', () => {
    assert.throws(() => parseArgs(['-n', 'a', 'a.txt']), { message: 'head: illegal lines count -- a' });
  });

  it('Should throw error if both options are given', () => {
    assert.throws(() => parseArgs(['-n2', '-c3', 'a.txt']), { message: 'head: can\'t combine line and byte counts' });
  });

  it('Should give illegal option error for options other than n,c', () => {
    assert.throws(() => parseArgs(['-f', '3', 'a.txt']), {
      message: 'head: illegal option -- f\nusage: head [-n lines | -c bytes] [file ...]'
    });
    assert.throws(() => parseArgs(['-m', '3', 'a.txt']), {
      message: 'head: illegal option -- m\nusage: head [-n lines | -c bytes] [file ...]'
    });
  });
});

describe('splitArgs', () => {
  it('Should give args as it is', () => {
    assert.deepStrictEqual(splitArgs(['-n', '10']), ['-n', '10']);
  });
  
  it('Should split args if they are combined', () => {
    assert.deepStrictEqual(splitArgs(['-n10']), ['-n', '10']);
    assert.deepStrictEqual(splitArgs(['-c10']), ['-c', '10']);
  });

  it('Should split when number and - are combined', () => {
    assert.deepStrictEqual(splitArgs(['-10']), ['-n', '10']);
    assert.deepStrictEqual(splitArgs(['-1']), ['-n', '1']);
  });

  it('Should not split for filenamess', () => {
    assert.deepStrictEqual(splitArgs(['-n', '10', 'a.txt']), ['-n', '10', 'a.txt']);
    assert.deepStrictEqual(splitArgs(['-c', '2', 'a.txt', 'b.txt']), ['-c', '2', 'a.txt', 'b.txt']);
  });
});
