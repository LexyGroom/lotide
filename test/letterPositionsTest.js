const assert = require('chai').assert;
//for each letter in a string returns the index for all locations within the string
const letterPositions = require('../letterPositions')

describe("#letterPositions", () => {

  it('returns [2,3] for ("hello").l', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

    it('returns [0] for ("Hello").h', () => {
    assert.deepEqual(letterPositions("Hello").H, [0]);
  });

});