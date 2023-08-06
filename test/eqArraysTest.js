//compares the 2 values and prints a pass or fail message
const assertEqual = require('../assertEqual');
//checks if array1 is equal to array 2 returns true or false
const eqArrays = require('../eqArrays')

//testing
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should pass
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should pass