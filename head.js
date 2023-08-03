//compares the 2 values and prints a pass or fail message
const assertEqual = require('./assertEqual');

//returns the first item in the array, if empty returns undefined
const head = function(inputArray) {
  if (inputArray.length > 0) {
    return inputArray[0];
  } else {
    return undefined;
  }
};

module.exports = head;