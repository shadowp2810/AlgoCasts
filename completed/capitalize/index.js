// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

function capitalizeFor(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      result += str[i].toUpperCase();
    } else result += str[i];
  }
  return result;
}

module.exports = capitalize;

/*
capitalize:
Make an empty array "words"
Split the input string by spaces to get an array
For each word in the array
    Upper case the first letter of the word
    Join first letter with rest of string
    Push results into "words" array
Join 'words' into a string and return it

capitalizeFor:
Create an empty string called 'result'
For each character in string
    If character to left has a space
        capitalize it and add it to 'result'
    else add it to result
*/
