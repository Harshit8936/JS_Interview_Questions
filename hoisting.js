// following two lines will run successfully due to hoisting in JS
// let a ;         // here it can be
console.log(a)
// greet();
// function greet(){
//     console.log("Good mrng")
// }

// declaration hoisted to the top but initialization is not
// the variable will be undefined until the line where its initialized is reached
var a = 9;
// let a =9;           // let can not be hoisted at the time of initilization var can  OR can not access a before initi
console.log(a)


// function expression are also not hoisted
// ab();
// var ab = function(){
//     console.log("good")
// }


// In the case of let & const there is temporal dead zone but in case of var there is no temporal dead zone


myFunc();

var myFunc = function(){
    console.log("first")
}

myFunc();
function myFunc(){
    console.log("second")
}
myFunc();

// first global executuion phase--> MEMORY AND CODE
// because var is first goes in Memory phase at that time var is undefined and function updated that value
// because function also goes in memory phase then will execute code phase

// Only root variable will go in memeory phase those varaibles defined inside functions will not go in memeory phase



/* HOW JS EXECUTES CODE?

--> JS code executed by browser
--> Code parsed by the Javascript engine
--> Global Memory allocation
--> Global execution context creation

*/

/*
Before execution the code, the JS engine creates the memeory space for variables and functions at global or local level.
This preparation phase is called hoisting.

*/

/*
Functions are fully hoisted. Entire function code is allocated in memory.

sayHello();             PERFECTLY WORKED
function sayHello(){
console.log("Hello world!")
}
*/


/*
VAR variables

When a var variable is declared, the JS engine allocates memory for it during the hoisitng phase and initializes 
with value of undefined 

*/

/*
LET & CONST

Both are also hoisted meaning memory is allocated for them during the hoisting phase.
However, they are initialized and placed in a Temporal dead zone--> A phase, where the varaiables exist but cannot be accessed.

*/



