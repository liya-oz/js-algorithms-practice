/**
 * Remove all spaces from a string
 * Example: removeSpaces("hello world") → "helloworld"
 */

function removeSpaces(str) {
  let characters = str.split('');
  let result = characters.filter((char) => char !== ' ');
  return result.join('');
}

console.log(removeSpaces('hello world'));

module.exports = removeSpaces;

// Expected output: Array ["exuberant", "destruction", "present"]
