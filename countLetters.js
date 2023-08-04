//compares the 2 values and prints a pass or fail message
const assertEqual = require('../assertEqual');

//takes a string and returns a count of each of the letters
//countLetters('LHL') => L appears twice, and H appears once {l: 2, h: 1}
const countLetters = function(string) {
  const result = {};
  //loop through the string
  for (const letter of string) {
    //check if it's a letter
    if (/[a-zA-Z]/.test(letter)) {
      //change to lowercase
      const lowercase = letter.toLowerCase();
      //add to count
      result[lowercase] = (result[lowercase] || 0) + 1;
    }
  }
  return result;
};

module.exports = countLetters;