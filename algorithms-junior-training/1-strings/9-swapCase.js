/**
 * Swap case of each character (Aa → aA)
 * Example: swapCase("Hello") → "hELLO"
 */

function swapCase(str) {
  let characters = str.split('');

  for (let i = 0; i < characters.length; i++) {
    let currentChar = characters[i];
    let isUpperCase = currentChar === currentChar.toUpperCase();
    characters[i] = isUpperCase
      ? currentChar.toLowerCase()
      : currentChar.toUpperCase();
  }
  return characters.join('');
}

console.log(swapCase('Hello'));

module.exports = swapCase;
