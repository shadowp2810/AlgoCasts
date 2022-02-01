// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else level += " ";
    }
    console.log(level);
  }
}

function pyramidRecursive(n, row = 0, level = "") {
  if (row === n) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    //move to next row
    return pyramidRecursive(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add =
    midpoint - row <= level.length && midpoint + row >= level.length
      ? "#"
      : " ";

  //move to next column in same row
  pyramidRecursive(n, row, level + add);
}

module.exports = pyramidRecursive;

/*
From 0 to n (iterate through rows)
    Create an empty string 'level'
    From 0 to ??? (columns)
        If the columns should have a '#'
            Add a '#' to level
        Else Add a ' ' to level
    Console log stair
*/
