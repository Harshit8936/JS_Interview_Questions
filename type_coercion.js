/* Implicit type coercion in javascript is the automatic conversion of value from one data type to another. 
It takes place when the operands of an expression are of different data types.




*/
// Number to String Conversion
var x = 3;
var y = "3";
console.log(typeof x)
console.log(typeof y)
console.log(x + y) // Returns "33" 


// String to Number Conversion
/*
When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, 
all the values that are not numbers are converted into the number data type, 
as these operations can be performed between numbers only.

*/
// The string '5' is converted
// to number 5 in all cases
// implicitly
let w = 10 - '5';
let x = 10 * '5';
let y = 10 / '5';
let z = 10 % '5';

console.log(w);     // 5
console.log(x);     // 50
console.log(y);     //2
console.log(z);     //0


console.log(10 % 2)        // 0
console.log(6 % 14)         // 6
console.log(4 % 9)          // 4
// there is rule that about output because when first number is less than second number then it will always return first number 


// Boolean coercion
/*
Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks.
To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.

Truthy values are those which will be converted (coerced) to true.
Falsy values are those which will be converted to false.

All values except false, 0, 0n, -0, “”, null, undefined, and NaN are truthy values.
*/

var x = 0;
var y = 23;
        
if(x) { console.log(x) }   // The code inside this block will not run since the value of x is 0(Falsy)  
        
if(y) { console.log(y) }    // The code inside this block will run since the value of y is 23 (Truthy)

// Boolean to Number


// The Boolean value true is
// converted to number 1 and
// then operation is performed
let x = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
let y = false + 2;

console.log(x);
console.log(y);




// The Equality Operator
/*
The equality operator (==) can be used to compare values irrespective of their type. 
This is done by coercing a non-number data type to a number. 
*/


// Should output 'true' as string '10'
// is coerced to number 10
let x = (10 == '10');

// Should output 'true', as boolean true
// is coerced to number 1
let y = (true == 1);

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
let z1 = (true == 'true');

console.log(x);
console.log(y);
console.log(z1);



// Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They always return one of the operands.

// OR ( || ) operator - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.

// AND ( && ) operator - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.


var x = 220;
var y = "Hello";
var zz = undefined;

console.log(x || y || zz)  // 220
console.log(x || zz)       //220

console.log(x && y)   // "hello"
console.log(y && zz)   // undefined


if( x && y ){ 
  console.log("Code runs" ); // This block runs because x && y returns "Hello" (Truthy)
}  

if( x || zz ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}

