// Multiplication can be thought of as repeated addition. Exponentiation can be thought of as repeated multiplication. Tetration is repeated exponentiation.
// Just as the 4th power of 3 is 3*3*3*3, the 4th tetration of 3 is 3^3^3^3. By convention,
// we insert parentheses from right to left, so the 4th
// tetration of 3 is 3^(3^(3^3))) = 3^(3^27) = 3^7625597484987 = a really big number

// Your Task
// Complete the function
// that returns the number that is the yth tetration of x, where x is a positive integer, and y is a non-negative integer.
// The function should return a number (not a string that picks out the number).

// Note: the convention is that, as with exponentiation, the 0th tetration of any number is always 1

function tetration(x, y) {
  var r = 1;
  if (y === 0) return 1;
  else {
    for (a = 1; a <= y; a++) {
      r = Math.pow(x, r);
    }
    return r;
  }
}

//BEST RESPONSE

function tetration(x, y) {
  if (y == 0) return 1;
  return x ** tetration(x, y - 1);
}
