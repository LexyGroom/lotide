const assert = require('chai').assert;
//returns the first item in the array, if empty returns undefined
const head = require('../head');

describe("#head", () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns "Single" for ["Single"]', () => {
    assert.strictEqual(head(["Single"]), "Single");
  });

  it('returns undefined for 1', () => {
    assert.strictEqual(head(1), undefined);
  });

  it('returns undefined for []', () => {
    assert.strictEqual(head([]), undefined);
  });

    it('returns undefined for ', () => {
    assert.strictEqual(head(), undefined);
  });
});