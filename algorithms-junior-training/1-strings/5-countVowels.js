/**
 * Count the number of vowels in a string
 * Example: countVowels("hello") → 2
 */

function countVowels(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if ('aeiou'.includes(str[i])) {
      result++;
    }
  }
  return result;
}

console.log(countVowels('hello'));

module.exports = countVowels;
