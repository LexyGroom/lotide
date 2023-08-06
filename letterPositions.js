//for each letter in a string returns the index for all locations within the string
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    //check if it's a letter
    if (/[a-zA-Z]/.test(sentence[i])) {
      //add to results
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;