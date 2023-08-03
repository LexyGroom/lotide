//compares the 2 values and prints a pass or fail message
const assertEqual = require('../assertEqual');
//returns the first item in the array, if empty returns undefined
const head = require('../head');

//testing
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Single"]), "Single");
assertEqual(head([]), undefined);