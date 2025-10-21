/*
If you don't know what Currying is, essentially is a programming technique 
where you take a function with multiple arguments, 
and you turn it into smaller sequential functions where you pass one argument at a time.

It is a technique where a function takes one argument at a time, returning another function to handle next argument.
and so on, until all arguments provided. 

we can achieve currying by using closures

This makes functions reusable and flexible.

Why use currying ?

Instead of duplicate code, currying breaks functions into smaller, reusable pieces. This is especially useful
in real world scenarios like applying different tax rates based on location in an e-commerce app.

*/
// your normal function
const add = (a, b) => {
    return a + b;
}
  
  console.log(add(1,2)); // 3

  // Let's take xample we will add when we get all 3 varaiables and a will get from an api, b will get from another api and c will get from user input.
// using currying
function add1(x){
    return y =>{
      return z =>{
        return x+y+z
      }
    }
}
console.log(add1(3)(6)(9))

// function add2(a){
//   return function (b){
//     return function (c){
//       return a+b+c
//     }
//   }
// }

// by using modern javascript i.e. ES6
const add2 = (a)=>(b)=>(c)=>a+b+c
console.log(add2(10)(20)(30))


function applyTax(rate){
  return function(amount){
    return amount + (amount * rate / 100 )
  }
}

const applyIndiaTax = applyTax(18); // 18% tax in india
const applyUsTax = applyTax(10);    // 10% tax in us

console.log(applyIndiaTax(1000));
console.log(applyUsTax(1000));

// by using modern JS
/*
const applyTax = (rate)=>(amount)=>amount + (amount*rate/100);
*/

// with the help of currying, you can quickly create reusable tax functions for different regions, 
// keep your code clean and efficient !

// Sending auto email and this function not execute until they get all it's arguments they will execute when they have all require arguments

// function sendAutoEmail(to){
//   return function(subject){
//     return function(body){
//       console.log(`Sending Email to ${to} with subject will be ${subject} along with body i.e. ${body}`)
//     }
//   }
// }

// By using ES6 modern javascript
const sendAutoEmail = (to)=>(subject)=>(body)=>`Sending Email to ${to} with subject will be ${subject} along with body i.e. ${body}`



// divide each task to 3 developers
let step1 = sendAutoEmail('harshit@gmail.com');
let step2 = step1('Order confirmation');
console.log(step2('Hey you have something'))







