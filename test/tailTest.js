const assert = require('chai').assert;
//compares the 2 values and prints a pass or fail message
const tail = require('../tail');

//testing
describe("#tail", () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), undefined);
  });

  it("returns undefined for ", () => {
    assert.deepEqual(tail(), undefined);
  });

});