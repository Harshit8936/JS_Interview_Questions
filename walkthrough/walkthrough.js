

console.log(0 == -0);       // true
console.log(0 === -0);      // true
console.log(0 === "-0");      // false

// OLX Interview
const number = 21;
console.log(number.toString());   // 21
// console.log(number.toString(1));   // RangeError: toString() radix argument must be between 2 and 36
console.log(number.toString(4));   //       this will return number system
console.log(number.toString(2));   // binary number system
console.log(number.toString(8));    // octal number system
console.log(number.toString(16));   //hexadecimal number system



// Example
var isPass = false;

if(isPass){
    function greet(){
        console.log("Welcome");
    }
}

greet();


// if true Welcome else greet is not a function
