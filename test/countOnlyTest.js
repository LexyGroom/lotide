const assert = require('chai').assert;
//counts the requested items within an array, array can contain items not being counted
const countOnly = require('../countOnly')

describe("#countOnly", () => {

  it('returns {"a": 4, "b": 2} for ["a", "b", "a", "c", "a", "b", "a"], counting {"a", "b"}', () => {
    assert.deepEqual(countOnly(["a", "b", "a", "c", "a", "b", "a"], {"a": true, "b": true}), {"a": 4, "b": 2});
  });

  it('returns {} for [], counting { "a", "b"}', () => {
    assert.deepEqual(countOnly([], { "a": true, "b": true }), {});
  });

});