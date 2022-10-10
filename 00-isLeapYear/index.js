// Create a program that return true if a year is a leap year, otherwise returns false
// `function isLeapYear(n: number): boolean`

function isLeapYear(n) {
    return n % 4 == 0;
}

console.log(isLeapYear(1995))