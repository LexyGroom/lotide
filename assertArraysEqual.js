//checks if array1 is equal to array 2 returns true or false
const eqArrays = require('./eqArrays')

//using eqArrays, logs appropriate message
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log("✅ Array Assertion Passed.");
  } else {
    console.log("🛑 Array Assertion Failed.");
  }
};

module.exports = assertArraysEqual