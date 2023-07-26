// checks if array1 is equal to array 2 returns true or false
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

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
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }); //pass
assertObjectsEqual({ color: "blue", size: "medium" }, { size: "medium", color: "red" }); //fail