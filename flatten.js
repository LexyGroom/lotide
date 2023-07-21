// checks if array1 is equal to array 2 returns true or false
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//using eqArrays console logs whether the array passes or fails
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Array Assertion Passed.");
  } else {
    console.log("🛑 Array Assertion Failed.");
  }
};

//takes in an array including nested arrays and returns a single level array
//flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
const flatten = function(sourceArray) {
  //check if each element is an array or not
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      //remove the nested array and add back without being nested
      sourceArray.splice(i, 1, ...sourceArray[i])
    }
  }
  return sourceArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]