// You might know some pretty large perfect squares. But what about the NEXT one?
//
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

function findNextSquare(sq) {
  var squareRoot = Math.sqrt(sq);
  if (squareRoot % 1 === 0) {
    return Math.pow(squareRoot + 1, 2);
  } else {
    return -1;
  }
}
