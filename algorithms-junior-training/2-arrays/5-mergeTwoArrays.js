/**
 * Merge two arrays
 * Example: mergeArrays([1, 2], [3, 4]) → [1, 2, 3, 4]
 */

function mergeArrays(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result;
}
console.log(mergeArrays([1, 2], [3, 4]));

module.exports = mergeArrays;
