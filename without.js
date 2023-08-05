//takes in the source array and returns a new array with requested items removed
const without = function(source, itemsToRemove) {
  const result = [];
  //result = source - itemsToRemove
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = without;