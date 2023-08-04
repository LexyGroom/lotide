//takes in an array including nested arrays and returns a single level array
const flatten = function(sourceArray) {
  //check if each element is an array or not
  for (let i = 0; i < sourceArray.length; i++) {
    if (Array.isArray(sourceArray[i])) {
      //remove the nested array and add back without being nested
      sourceArray.splice(i, 1, ...sourceArray[i]);
    }
  }
  return sourceArray;
};

module.exports = flatten;