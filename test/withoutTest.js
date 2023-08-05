const assert = require('chai').assert;
//takes in the source array and returns a new array with requested items removed
const without = require('../without')

describe("#without", () => {

  it('returns [2, 3] for ([1, 2, 3], [1])', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('returns ["1", "2"] for (["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('returns ["lighthouse"] for (["hello", "world", "lighthouse"])', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["hello", "world"]), ["lighthouse"]);
  });

});