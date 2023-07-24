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

//for each letter return the numbers for all locations it shows up within the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //check if it's a letter
    if (/[a-zA-Z]/.test(sentence[i])) {
      //change to lowercase
      const lowercase = sentence[i].toLowerCase();
      //add to results
      if (!results[lowercase]) {
        results[lowercase] = [i];
      } else {
        results[lowercase].push(i);
      }
    }
  }
  return results;
};

//testing
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").l, [2, 3]);