const assert = require('chai').assert;
//takes in an array including nested arrays and returns a single level array
const flatten = require('../flatten')

describe("#flatten", () => {

  it('returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('returns ["hello", "world", "lighthouse"] for ["hello", ["world", "lighthouse"]]', () => {
    assert.deepEqual(flatten(["hello", ["world", "lighthouse"]]), ["hello", "world", "lighthouse"]);
  });
 });