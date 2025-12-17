/**
 * Find the maximum value in an array
 * Example: findMax([1, 5, 3, 9, 2]) → 9
 */

function findMax(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

console.log(findMax([1, 5, 3, 9, 2]));

module.exports = findMax;
