//takes an array and returns the middle elements
const middle = function(array) {
  const length = array.length;
  //for 1-2 elements returns empty array
  if (length <= 2) {
    return [];
  //for odd number of elements, return middle
  } else if (length % 2 === 1) {
    const mid = Math.floor(length / 2);
    return [array[mid]];
    //for even number of elements, return both middle
  } else if (length % 2 === 0) {
    const mid1 = length / 2 - 1;
    const mid2 = length / 2;
    return [array[mid1], array [mid2]];
  }
};

module.exports = middle