//compares the 2 values and prints a pass or fail message
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//testing
console.log(countLetters("lighthouse in the house"));

const words = "Hello";
console.log(countLetters(words));
//make sure the original was not altered by the function
assertEqual(words, "Hello");