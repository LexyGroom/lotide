const assert = require('chai').assert;
//scans the object and returns the first key that contains the value, if none are found return undefined
const findKeyByValue = require('../findKeyByValue')

describe("#findKeyByValue", () => {

  it('returns "sciFi" for bestTVShowsByGenre, "The Expanse"', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
  });

  it('returns undefined for bestTVShowsByGenre, "That 70s Show"', () => {
    const bestTVShowsByGenre = {
      sciFi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
  
});