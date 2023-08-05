const assert = require('chai').assert;

//loops through array performing callback to each element, returns array of results
const map = require('../map')

describe("#map", () => {

  it('returns ["g", "c", "t", "m", "t"] for ["ground", "control", "to", "major", "tom"], word => word[0]', () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it('returns [3, 5, 4, 5, 5] for ["bee", "smash", "grim", "polly", "storm"], cat => cat.length', () => {
    assert.deepEqual(map(["bee", "smash", "grim", "polly", "storm"], cat => cat.length), [3, 5, 4, 5, 5]);
  });

  it('returns [false, true, false, true, false] for [1, 2, 3, 4, 5], num => ((num % 2) === 0)', () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], num => ((num % 2) === 0)), [false, true, false, true, false]);
  });

  it('returns [true, false, false, true] for ["superman", "captain america", "gambit", "squirrel girl"], hero => hero.includes("s")', () => {
    assert.deepEqual(map(["superman", "captain america", "gambit", "squirrel girl"], hero => hero.includes("s")), [true, false, false, true]);
  });

});