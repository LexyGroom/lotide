//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//testing
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);