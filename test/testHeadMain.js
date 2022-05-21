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

  it('Should return first 2 lines of the file content', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'a\nb\nc');
    assert.strictEqual(headMain(mockedReadFileSync, 'a.txt', 2, '\n'), 'a\nb');
  });

  it('Should return first 3 characters of the file content', () => {
    const mockedReadFileSync = mockReadFileSync('a.txt', 'abc');
    assert.strictEqual(headMain(mockedReadFileSync, 'a.txt', 2, ''), 'ab');
  });
});
