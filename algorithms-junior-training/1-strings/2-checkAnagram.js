/**
 * Check if two strings are anagrams
 * Example: isAnagram("listen", "silent") → true
 */

function isAnagram(str1, str2) {
  let sortStr2 = str2.split('').sort().join('');
  let sortStr1 = str1.split('').sort().join('');
  return sortStr2 === sortStr1;
}

isAnagram('listen', 'silent');

module.exports = isAnagram;
