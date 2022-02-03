// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}

function vowelsRegEx(str) {
  //g makes sure to not stop at first in bracket, and i handles lower or upper cases
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;