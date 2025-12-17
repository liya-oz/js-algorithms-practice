/**
 * Find the minimum value in an array
 * Example: findMin([1, 5, 3, 9, 2]) → 1
 */

function findMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}
console.log(findMin([1, 5, 3, 9, 2]));

module.exports = findMin;
