// Primitive Types (Call by Value) IMMUTABLE


// For primitive data types (such as number, string, boolean, undefined, null, symbol, and bigint), 
// JavaScript uses call by value. 
// This means that when a primitive value is passed to a function, 
// the function receives a copy of the value. 
// Any changes made to the parameter inside the function do not affect the original value.

function changeValue(x) {
    x = 10;  // Modifies the copy of x
}

let a = 5;
changeValue(a);
console.log(a);  // Output: 5 (original value remains unchanged)


//Reference Types (Call by Reference) MUTABLE


//For reference types (such as objects, arrays, and functions), 
// JavaScript uses call by reference. When an object or array is passed to a function, 
// the function receives a reference to the original object, not a copy. 
// This means changes made to the properties of the object or elements of the array inside the function will affect the original object or array.

// Example with objects:

function modifyObject(obj) {
    obj.name = 'John';  // Modifies the original object
}

let person = { name: 'Alice' };
modifyObject(person);
console.log(person.name);  // Output: 'John' (original object modified)


/*

Primitive types are passed by value: a copy of the value is made, and changes inside the function do not affect the original variable.


Reference types are passed by reference: the function works directly with the original object or array, so changes to properties or elements will affect the original.

*/


// JavaScript integers are only accurate up to 15 digits:



let x = BigInt(999999999999999);
console.log(typeof x)


