// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    // if (!charMap[char]) charMap[char] = 1;
    // else charMap[char]++;
    charMap[char] = charMap[char] + 1 || 1;
  }
  console.log(charMap);

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

/*
We create a charecter map of a string,
We convert the string into an object, that counts its occurences.
    { '1': 6, a: 1, b: 1, c: 1, d: 1, e: 1, f: 1, g: 1 }
    
What is the most common charecter in the string?
    most occurences of a property in object.
Does string A have the same charecters as string B (is it an anagram) ?
    compare the objects made from both strings
Does the given string have repeated charectes in it?
    any value in object with value greater than 1.

*/
