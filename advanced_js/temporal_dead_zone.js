
// let and const is create separate memory allocation they will not go in globally
// let and const is hoisted but In temporal dead zone we can not acess let and const that's why they return error.

console.log(c);

var a = 10;

// above area is temporal dead zone for let
let b = 20;

// above area is temporal dead zone for const
const c = 30;

console.log(a,b,c)


console.log(number2)


// ReferenceError: number2 is not defined

// There's a name for the period during execution where let/const variables are hoisted but not accessible: 
// it's called the Temporal Dead Zone.



console.log(number)

let number = 10

console.log(number)
// The number variable is in a temporal dead zone where JavaScript knows of its existence 
// (because its declaration is hoisted) but it's not accessible (as it doesn't have an initialization).

// As I've explained in this article, let and const variables are hoisted, 
// only they are hoisted without a default initialization. This makes them inaccessible (as such variables are in a temporal dead zone).

// Variables declared with var, on the other hand, are hoisted with a default initialization of undefined.


// we cannot redeclare let varaible but can do re assigned value
// we cannot redecalre and reassigned const variable due to restrictness.

// priority is const -> let -> var 

