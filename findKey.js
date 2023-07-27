//checks if function is behaving as expected
//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (let key of objectKeys) {
    if (callback(object[key])) {
      console.log(key)
      return key; // Return the key when the callback returns truthy
    }
  }
  return undefined; // Return undefined if no key satisfies the callback condition
};

//testing
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 }
}, x => x.stars === 2) // => "noma"

const data = { a: 1, b: 2, c: 3 };
assertEqual(findKey(data, x => x > 2), 'c');