const assert = require('assert');
const { headMain } = require('../src/headLib.js');

const mockReadFileSync = (expectedFileName, content) => {
  return (fileName, encoding) => {
    assert.equal(expectedFileName, fileName);
    assert.equal('utf8', encoding);
    return content;
  };
};

describe('headMain', () => {
  it('Should return content of the file', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'hello');
    assert.strictEqual(headMain(mockedReadFileSync, 'a.txt'), 'hello');
  });

  it('Should throw error when cannot read file', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'hello');
    assert.throws(() => headMain(mockedReadFileSync, 'missing.txt'), {
      name: 'FileReadError',
      message: 'missing.txt: No such file or directory',
      fileName: 'missing.txt',
    });
  });

  it('Should return first 2 lines of the file content', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'a\nb\nc');
    assert.strictEqual(headMain(mockedReadFileSync, '-n', '2', 'a.txt'), 'a\nb');
  });

  it('Should return first 2 characters of the file content', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'abc');
    assert.strictEqual(headMain(mockedReadFileSync, '-c', '2', 'a.txt'), 'ab');
  });
});
