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

//takes an array and returns the middle elements
//for 1-2 elements return empty, odd number return middle, even returns both middle
const middle = function(array) {
  const length = array.length;
  //for 1-2 elements returns empty array
  if (length <= 2) {
    return [];
  //for odd number of elements, return middle
  } else if (length % 2 === 1) {
    const mid = Math.floor(length / 2);
    return [array[mid]];
    //for even number of elements, return both middle
  } else if (length % 2 === 0) {
    const mid1 = length / 2 - 1;
    const mid2 = length / 2;
    return [array[mid1], array [mid2]];
  }
};

//testing
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // [4]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]
console.log(middle([1])); // []
console.log(middle([])); // []

const words = ["hello", "world", "lighthouse"];
console.log(middle(words));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);