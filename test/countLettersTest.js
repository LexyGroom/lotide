const assert = require('chai').assert;
//takes a string and returns a count of each of the letters
const countLetters = require('../countLetters')

describe("#countLetters", () => {

  it('returns {l: 2, h: 1} for ("LHL")', () => {
    assert.deepEqual(countLetters("LHL"), {L: 2, H: 1});
  });

  it('returns {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1} for ("Hello World")', () => {
    assert.deepEqual(countLetters("Hello World"), {H: 1, e: 1, l: 3, o: 2, W: 1, r: 1, d: 1});
  });

  it('returns {} for ("")', () => {
    assert.deepEqual(countLetters(""), {});
  });

});