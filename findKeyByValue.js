//checks if function is behaving as expected
//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//scan the object and return the first key that contains the given value
//if none are found return undefined
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

//testing
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);