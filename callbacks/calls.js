/*
In returning a callback, the called function returns a callback instead of executing it immediately.


In contrast to returning a callback function, 
calling a callback function is simply the immediate execution of the callback function. 
*/




// Normal function
// function greet(){
//     console.log("Normal function")
// }
// greet()

// // Arrow function
// const greetigs = (count)=>{
//     for(let i=0;i<count;i++) console.log("Arrow function")
// }
// greetigs(3)

// const square = (num)=> num*num;
// console.log(square(9))


// CALLBACKS FUNCTION

// A callback is a function passed as an argument to another function


// function
function greet(name, callback){
    console.log(`Hi ${name} `);
    callback()
}

// callback function
function callMe(){
    console.log("I am callBAck function")
}

// passing function as an argument
greet("RAM",callMe)


//-----------------------------------------------------------------
const calculate = (a,b,operation)=>{
    return operation(a,b)
}


// Method 1
const addition = calculate(3,4, function (num1,num2){
    return num1+num2
})
console.log(addition);

// Method 2
const subtraction = (a,b)=> a - b;
const subResult = calculate(8,3,subtraction)        // we are passing subtraction function not calling for calling use this subtraction()
console.log("subResult",subResult)

// Method 3
function multiply(a,b){
    return a*b
}
const multResult = calculate(9,4,multiply);
console.log('multResult',multResult);

