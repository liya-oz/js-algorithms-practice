/**
 * Merge two sorted arrays into one sorted array
 * Example: mergeSortedArrays([1, 3, 5], [2, 4, 6]) → [1, 2, 3, 4, 5, 6]
 */

function mergeSortedArrays(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  let sortedMergedArr = mergedArr.sort((a, b) => a - b);
  return sortedMergedArr;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

module.exports = mergeSortedArrays;
