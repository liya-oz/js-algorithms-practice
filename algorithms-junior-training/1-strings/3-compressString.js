/**
 * Compress a string by counting consecutive characters
 * Example: compressString("aaabb") → "a3b2"
 */

function compressString(str) {
  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + count;
      count = 1;
    }
  }

  return result;
}

console.log(compressString('aaabb'));

module.exports = compressString;
