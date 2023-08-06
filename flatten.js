//takes in an array including nested arrays and returns a single level array
const flatten = function(sourceArray) {
  let newArray = [];
  //check if each element in the array is an array or not
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      //recursion for deeply nested arrays
      const nested = flatten(sourceArray[i]);
      //add to new array
      newArray = newArray.concat(nested);
    } else {
      //add to new array if not nested
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

module.exports = flatten;