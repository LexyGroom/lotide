/*Based on that result, it will then print a message to the console indicating whether the arrays are equal or not. 
If as per eqArrays the two input arrays are equal it will print something like "These arrays are equal", 
if not equal it could print "These arrays are not equal".
*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Array Assertion Passed.")
  } else {
    console.log("🛑 Array Assertion Failed")
  }
}

//TESTING
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail