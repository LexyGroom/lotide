// returns true if both objects have identical keys with identical values
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  //checks they have the same number of keys
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  //looping through the object keys
  for (const key of object1Keys) {
    const value1 = object1[key];
    const value2 = object2[key];
    //compare the arrays
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    //checks if the keys are objects
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      if (!eqObjects(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  //if none of the fail conditions are met, return true
  return true;
};

//compares 2 objects and prints to console
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//testing
assertObjectsEqual(shirtObject = { color: "red", size: "medium" }, anotherShirtObject = { size: "medium", color: "red" }); //pass
assertObjectsEqual(shirtObject = { color: "blue", size: "medium" }, anotherShirtObject = { size: "medium", color: "red" }); //fail