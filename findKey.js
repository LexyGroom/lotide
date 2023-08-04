//returns object key that fits the callback
const findKey = function(object, callback) {
  let objectKeys = Object.keys(object);
  for (let key of objectKeys) {
    if (callback(object[key])) {
      console.log(key);
      return key; //returns the key when the callback returns truthy
    }
  }
  return undefined; //returns undefined if no key fits the callback
};

module.exports = findKey;