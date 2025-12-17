/**
 * Reverse a string
 * Example: reverseString("hello") → "olleh"
 */

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

module.exports = reverseString;
