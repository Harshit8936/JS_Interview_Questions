// Math.round(x) returns the nearest integer:

console.log("ROUND")

console.log(Math.round(4.6))        // 5
console.log(Math.round(4.5))        // 5
console.log(Math.round(4.4))        // 4

// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log("CEIL")

console.log(Math.ceil(4.9))
console.log(Math.ceil(4.7))
console.log(Math.ceil(4.4))
console.log(Math.ceil(4.5))
console.log(Math.ceil(4.2))
console.log(Math.ceil(-4.2))


console.log("FLOOR");

// Math.floor(x) returns the value of x rounded down to its nearest integer:

console.log(Math.floor(4.9))
console.log(Math.floor(4.7))
console.log(Math.floor(4.4))
console.log(Math.floor(4.5))
console.log(Math.floor(4.2))
console.log(Math.floor(-4.2))


console.log("TRUNC");


// Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.


// Math.trunc(x) returns the integer part of x:

console.log(Math.trunc(4.9))
console.log(Math.trunc(4.7))
console.log(Math.trunc(4.4))
console.log(Math.trunc(4.5))
console.log(Math.trunc(4.2))
console.log(Math.trunc(-4.2))


console.log("SIGN");

// Math.sign(x) returns if x is negative, null or positive:


console.log(Math.sign(-4))
console.log(Math.sign(0))
console.log(Math.sign(4))



console.log("RANDOM");

// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

// Math.random() used with Math.floor() can be used to return random integers.

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);

// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;




