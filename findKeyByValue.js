//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//scans the object and returns the first key that contains the value, if none are found return undefined
const findKeyByValue = function(object, value) {
  //creates an array of the keys
  let objectKeys = Object.keys(object);
  let foundKey;

  for (let objectKey of objectKeys) {
    //compares objectKey and value
    if (object[objectKey] === value) {
      //saves the matching key
      foundKey = objectKey;
      //exits the loop
      break;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;

//testing
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);