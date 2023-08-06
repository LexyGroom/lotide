//returns all items in an array except for the first
const tail = function(array) {
  if (Array.isArray(array) && array.length > 0) {
    return array.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;