/**
 * Rotate an array by N steps to the right
 * Example: rotateArray([1, 2, 3, 4, 5], 2) → [4, 5, 1, 2, 3]
 */

function rotateArray(arr, steps) {
  let lastElements = arr.slice(-steps);
  let firstElements = arr.slice(0, arr.length - steps);
  return [...lastElements, ...firstElements];
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

module.exports = rotateArray;
