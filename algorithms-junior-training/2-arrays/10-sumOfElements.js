/**
 * Calculate the sum of all elements in an array
 * Example: sumOfElements([1, 2, 3, 4]) → 10
 */

function sumOfElements(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
console.log(sumOfElements([1, 2, 3, 4]));

module.exports = sumOfElements;
