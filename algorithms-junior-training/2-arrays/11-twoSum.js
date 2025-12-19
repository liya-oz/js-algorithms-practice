/**
 * Find two indices whose values sum to the target
 * Example: twoSum([2, 7, 11, 15], 9) → [0, 1]
 */

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let difference = target - arr[i];
    let pairIndex = arr.indexOf(difference);
    let isValidPair = pairIndex !== -1 && pairIndex !== i;
    if (isValidPair) {
      let result = [i, pairIndex];
      return result;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

module.exports = twoSum;
