/**
 * Find the second largest value in an array
 * Example: findSecondLargest([1, 5, 3, 9, 2]) → 5
 */

function findSecondLargest(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 2];
}
console.log(findSecondLargest([1, 5, 3, 9, 2]));
module.exports = findSecondLargest;
