/**
 * Create a program that converts a number input to words
 * `function numToWord(n: number): string {}`
 * input n is 1 to 9
 *
 * coordinate with repository admin for further instructions
 */

const digitNames = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]

/**
 * This function returns the word equivalent of numbers between 1 to 9
 * @param {n} A Number between 1 to 9
 * @returns The name of the number
 */
function numToWord(n) {
  return digitNames[n-1];
}

console.log(numToWord(1));
console.log(numToWord(2));
console.log(numToWord(3));
console.log(numToWord(4));
console.log(numToWord(5));
console.log(numToWord(6));
console.log(numToWord(7));
console.log(numToWord(8));
console.log(numToWord(9));