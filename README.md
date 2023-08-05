# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learning at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lexygroom/lotide`

**Require it:**

`const _ = require('@lexygroom/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Takes in two arrays and console.log a pass or fail message to indicate whether they are equal or not. Requires eqArrays.
* `assertEqual(actual, expected)`: Takes in two values and console.log a pass or fail message to indicate whether they are equal or not.
* `assertObjectsEqual(actual, expected)`: Takes in two objects and console.log a pass or fail message to indicate whether they are equal or not. Requires eqObjects.
* `countLetters(string)`: Takes in a string and returns a count of each letter in the string.
* `countOnly(allItems, itemsToCount)`: Takes in an array of items and an object of items to count. Returns an object containing the counts.
* `eqArrays(array1, array2)`: Takes in two arrays and returns true or false based on a match.
* `eqObjects(object1, object2)`: Takes in two objects and returns true or false based on if the objects have identical keys with identical values.
* `findKey(object, callback)`: Takes in an object and a callback. Returns the first key in the object that received truthy from the callback.
* `findKeyByValue(object, value)`: Takes in an object and value and returns the first key that contains that value.
* `flatten(sourceArray)`: Takes in an array including nested arrays and returns a single level array.
* `head(inputArray)`: Takes in an array and returns the first item in the array.
* `letterPositions(sentence)`: Takes in a string and returns all the indices in the string where each character is found.
* `map(array, callback)`: Takes in an array and a callback and loops through the array performing the callback on each on each element. Returns an array of the results.
* `middle(array)`: Takes in an array and returns the middle items as an array. One or two items returns empty. Even number of items returns both middle.
* `tail(array)`: Takes in an array and returns all items except for the first.
* `takeUntil(array, callback)`: Takes in an array and a callback, collects items from the array until the callback returns truthy. Returns an array of the collected items.
* `without(source, itemsToRemove)`: Takes in two arrays and returns a new array made of the source without the unwanted items.