// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharacterMap = buildCharacterMap(stringA);
  const bCharacterMap = buildCharacterMap(stringB);

  if (Object.keys(aCharacterMap).length !== Object.keys(bCharacterMap).length) {
    return false;
  }

  for (let character in aCharacterMap) {
    if (aCharacterMap[character] !== bCharacterMap[character]) return false;
  }

  return true;
}

function buildCharacterMap(str) {
  const characterMap = {};

  for (let character of str.replace(/[^\w]/g, "").toLowerCase()) {
    characterMap[character] = characterMap[character] + 1 || 1;
  }

  return characterMap;
}

function anagramsSort(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagramsSort;

/*
anagrams:
We make charecter map objects of both string and compare them both.
anagramsSort:
We sort the two strings and compare if they are identical
*/
