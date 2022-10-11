// Create a program that return true if a year is a leap year, otherwise returns false
// `function isLeapYear(n: number): boolean`

/**
 * This function returns true if the year provided is a leap year, and false if it is not.
 * @param {n} Year
 * @returns A boolean value that refers to whether the year is a leapyear
 */
function isLeapYear(n) {
    return n % 4 == 0 && (n % 100 != 0 || n % 400 == 0);
}

console.log(isLeapYear(1900));
console.log(isLeapYear(1995));
console.log(isLeapYear(2000));
console.log(isLeapYear(2004));