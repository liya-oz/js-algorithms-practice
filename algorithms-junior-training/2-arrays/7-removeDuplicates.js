/**
 * Remove duplicate values from an array
 * Example: removeDuplicates([1, 2, 2, 3, 3, 4]) → [1, 2, 3, 4]
 */

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));

module.exports = removeDuplicates;
