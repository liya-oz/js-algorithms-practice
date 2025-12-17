/**
 * Check if a string is a palindrome
 * Example: isPalindrome("racecar") → true
 */

function isPalindrome(str) {
  let letters = str.split('');
  letters.reverse();
  let reversedsStr = letters.join('');
  return str === reversedsStr;
}

console.log(isPalindrome('racecar'));

module.exports = isPalindrome;
