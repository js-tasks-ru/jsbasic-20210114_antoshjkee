/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let counter = 1;
  while (n != 0) {
    counter = counter * n--;
  }
  return counter;
}
