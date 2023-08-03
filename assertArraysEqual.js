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

//testing
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail