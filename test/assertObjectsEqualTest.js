//compares 2 objects and prints to console
const assertObjectsEqual = require('../assertObjectsEqual')

//testing
assertObjectsEqual({ color: "red", size: "medium" }, { size: "medium", color: "red" }); //pass
assertObjectsEqual({ color: "blue", size: "medium" }, { size: "medium", color: "red" }); //fail