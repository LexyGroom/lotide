const assert = require('chai').assert;
//using eqArrays, logs appropriate message
const assertArraysEqual = require('../assertArraysEqual')
//takes an array and returns the middle elements
const middle = require('../middle')

// testing
describe("#middle", () => {

  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it('returns ["world"] for ["hello", "world", "lighthouse"]', () => {
    assert.deepEqual(middle(["hello", "world", "lighthouse"]), ["world"]);
  });

});