const assert = require('assert');
const { headMain } = require('../src/headLib.js');

const mockReadFileSync = (expectedFileName, content) => {
  return (fileName, encoding) => {
    assert.strictEqual(expectedFileName, fileName);
    assert.equal('utf8', encoding);
    return content;
  };
};

const mockConsoleLog = (mockContents) => {
  let index = 0;
  return (actualContent) => {
    assert.deepStrictEqual(actualContent, mockContents[index]);
    index++;
  };
};

describe('headMain', () => {
  it('Should return content of the file', () => {
    const log = mockConsoleLog(['hello']);
    const error = mockConsoleLog(['hello']);
    const mockedReadFileSync = mockReadFileSync('a.txt', 'hello');
    assert.strictEqual(headMain({ log, error}, mockedReadFileSync, 'a.txt'), undefined);
  });
  
  it('Should throw error when cannot read file', () => {
    const log = mockConsoleLog(['hello']);
    const error = mockConsoleLog(['missing.txt: No such file or directory']);
    const mockedReadFileSync = mockReadFileSync('a.txt', 'hello');
    assert.strictEqual(headMain({ log, error}, mockedReadFileSync, 'missing.txt'), undefined);
  });
  
  it('Should return first 2 lines of the file content', () => {
    const log = mockConsoleLog(['a\nb']);
    const error = mockConsoleLog([]);
    const mockedReadFileSync = mockReadFileSync('a.txt', 'a\nb\nc');
    assert.strictEqual(headMain({ log, error}, mockedReadFileSync, '-n', '2', 'a.txt'),undefined );
  });
  
  it('Should return first 2 characters of the file content', () => {
    const log = mockConsoleLog(['ab']);
    const error = mockConsoleLog([]);
    const mockedReadFileSync = mockReadFileSync('a.txt', 'abc');
    assert.strictEqual(headMain({ log, error}, mockedReadFileSync, '-c', '2', 'a.txt'), undefined);
  });

  it('Should format when multiple files are given', () => {
    const log = mockConsoleLog(['==> a.txt <==\nabc', '==> a.txt <==\nabc']);
    const error = mockConsoleLog([]);
    const mockedReadFileSync = mockReadFileSync('a.txt', 'abc');
    assert.strictEqual(headMain({ log, error}, mockedReadFileSync, 'a.txt', 'a.txt'), undefined);
  });
});
