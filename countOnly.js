//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//counts the requested items within an array, array can contain items not being counted
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  //check if item in allItems is in itemsToCount
  for (const item of allItems) {
    if (itemsToCount[item]) {
    //if yes add count to result, if not ignore
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  //return result
  return result;
};

module.exports = countOnly;

//testing
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
assertEqual(result1);