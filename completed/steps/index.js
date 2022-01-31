// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) stair += "#";
      else stair += " ";
    }

    console.log(stair);
  }
}

function stepsRecursion(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return stepsRecursion(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  stepsRecursion(n, row, stair + add);
}

module.exports = steps;

/*
From 0 to n
    Create an empty string stair
    From 0 to n
        If the current column is equal to or less than the current row
            Add a # to stair
        Else add a space to stair
    Console log stair

stepsRecursion:
if (row===n) then we have hit the end of our problem
if the stair string has a length === n then we are at end of row
if the length of stair string is less than or equal 
 to the row number we are working on, we add a "#", otherwise " "
*/
