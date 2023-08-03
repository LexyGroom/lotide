//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//returns the first item in the array, if empty returns undefined
const head = function(inputArray) {
  if (inputArray.length > 0) {
    return inputArray[0];
  } else {
    return undefined;
  }
};

//testing
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Single"]), "Single");
assertEqual(head([]), undefined);