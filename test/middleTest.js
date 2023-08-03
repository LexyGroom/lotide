//using eqArrays, logs appropriate message
const assertArraysEqual = require('../assertArraysEqual')
//takes an array and returns the middle elements
const middle = require('../middle')

//testing
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // [4]
console.log(middle([1, 2, 3, 4])); // [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]
console.log(middle([1])); // []
console.log(middle([])); // []

const words = ["hello", "world", "lighthouse"];
console.log(middle(words)); //["world"]
//make sure the original array was not altered by the function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);