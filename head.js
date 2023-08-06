//returns the first item in the array, if empty returns undefined
const head = function(inputArray) {
  //check if the input is an array and is not an empty array
  if (Array.isArray(inputArray) && inputArray.length > 0) {
    return inputArray[0];
  } else {
    return undefined;
  }
};

module.exports = head;