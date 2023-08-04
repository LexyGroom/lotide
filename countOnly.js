//counts the requested items within an array, array can contain items not being counted
const countOnly = function(allItems, itemsToCount) {
  const result = {};

  //check if item in allItems is in itemsToCount
  for (const item of allItems) {
    if (itemsToCount[item]) {
    //if yes add count to result, if not ignore
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  }
  //return result
  return result;
};

module.exports = countOnly;