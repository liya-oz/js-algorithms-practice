/**
 * Find the index of an element in an array
 * Example: findIndex([1, 2, 3, 4], 3) → 2
 */

function findIndex(arr, element) {
  return arr.indexOf(element);
}

console.log(findIndex([1, 2, 3, 4], 3));

module.exports = findIndex;
