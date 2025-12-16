/**
 * Count the number of characters in a string
 * Example: countCharacters("hello") → 5
 */

function countCharacters(str) {
  return str.split('').length;
}

console.log(countCharacters('hello'));

module.exports = countCharacters;
