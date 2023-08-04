//for each letter in a string returns the index for all locations within the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //check if it's a letter
    if (/[a-zA-Z]/.test(sentence[i])) {
      //change to lowercase
      const lowercase = sentence[i].toLowerCase();
      //add to results
      if (!results[lowercase]) {
        results[lowercase] = [i];
      } else {
        results[lowercase].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;