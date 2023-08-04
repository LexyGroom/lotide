const assert = require('chai').assert;
//returns true if both objects have identical keys with identical values
const eqObjects = require('../eqObjects')

describe("#eqObjects", () => {

  it('returns true for {color: "red", size: "medium"} equals {size: "medium", color: "red"}', () => {
    const obj1 = {color: "red", size: "medium"};
    const obj2 = {size: "medium", color: "red"};
    assert.strictEqual(eqObjects(obj1, obj2), true);
  });

  it('returns false for {a: 1, b: 2, c: 3} equals {a: 1, b: 2, d: 3}', () => {
    const obj1 = {a: 1, b: 2, c: 3};
    const obj2 = {a: 1, b: 2, d: 3};
    assert.strictEqual(eqObjects(obj1, obj2), false);
  });

});