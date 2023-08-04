//compares the 2 values and prints a pass or fail message
const assertEqual = require('../assertEqual')
//takes a string and returns a count of each of the letters
const countLetters = require('../countLetters')

//testing
console.log(countLetters("lighthouse in the house"));
const words = "Hello";
console.log(countLetters(words));
//make sure the original was not altered by the function
assertEqual(words, "Hello");