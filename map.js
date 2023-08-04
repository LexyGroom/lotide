//checks if array1 is equal to array 2 returns true or false
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//using eqArrays, logs appropriate message
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Array Assertion Passed.");
  } else {
    console.log("🛑 Array Assertion Failed.");
  }
};

//loops through array performing callback to each element, returns array of results
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

//testing
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1); 
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

//returns the length of each name
const cats = ["bee", "smash", "grim", "polly", "storm"]
const results3 = map(cats, cat => cat.length)
assertArraysEqual(results3, [3, 5, 4, 5, 5])

//false if num is odd, true if num is even
const nums = [1, 2, 3, 4, 5];
const results2 = map(nums, num => ((num % 2) === 0));
assertArraysEqual(results2, [false, true, false, true, false]);

//true if name has an "s", false if it doesn't
const heros = ["superman", "captain america", "gambit", "squirrel girl"]
const results4 = map(heros, hero => hero.includes("s"))
assertArraysEqual(results4, [true, false, false, true])