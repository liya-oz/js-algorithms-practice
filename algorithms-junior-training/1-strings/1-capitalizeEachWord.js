/**
 * Capitalize the first letter of each word
 * Example: capitalizeEachWord("hello world") → "Hello World"
 */

function capitalizeEachWord(str) {
  let words = str.split(' ');

  let capelizedFirstLetterWord = words.map(
    (word) => word[0].toUpperCase() + word.slice(1),
  );
  let result = capelizedFirstLetterWord.join(' ');
  console.log(result);
  return result;
}
capitalizeEachWord('hello world');

module.exports = capitalizeEachWord;
