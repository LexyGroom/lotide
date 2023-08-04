const assert = require('chai').assert;
//returns object key that fits the callback
const findKey = require('../findKey')

describe("#findKey", () => {
  it('returns noma for first result with 2 stars', () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 }
    }, x => x.stars === 2), "noma");
  });

  it('returns c for result greater than 2', () => {
    assert.strictEqual(findKey(data = {a: 1, b: 2, c: 3}, x => x > 2), "c");
  });
});