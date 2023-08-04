//scans the object and returns the first key that contains the value, if none are found return undefined
const findKeyByValue = function(object, value) {
  //creates an array of the keys
  let objectKeys = Object.keys(object);
  let foundKey;

  for (let objectKey of objectKeys) {
    //compares objectKey and value
    if (object[objectKey] === value) {
      //saves the matching key
      foundKey = objectKey;
      //exits the loop
      break;
    }
  }
  return foundKey;
};

module.exports = findKeyByValue;