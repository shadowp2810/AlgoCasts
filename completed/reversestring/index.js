// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverseFor(str) {
  let reveresed = "";
  for (let character of str) {
    reveresed = character + reveresed;
  }
  return reveresed;
}

function reversedReducer(str) {
  return str
    .split("")
    .reduce((accumulator, character) => character + accumulator, "");
}

module.exports = reversedReducer;

/*
reverse:
Turn str into an array
Call reverese function on array
Join array back into string
Return result

reverseFor:
Create an empty string called 'reversed'
For each charecter in provided string:
    Take the charecter and add it to the reversed
Return variable reveresed
pal ""=>"p"=>"ap"=>"lap"

reversedReducer:
Intial value of accumulator as empty string ""
*/
