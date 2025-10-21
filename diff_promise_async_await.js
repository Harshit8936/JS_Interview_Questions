/*
In JavaScript, promises and async/await are two different ways to handle asynchronous operations. 
But they are closely related.
*/

/*
PROMISE

A promise is an object that eventually leads to an asynchronous operation’s completion or failure. 
A promise can be in one of three states: pending, fulfilled, or rejected. 
When the asynchronous operation is completed, the Promise will either be fulfilled with a value or rejected with an error.

*/
// Using Promises
// function promiseFunction() {
//     return  new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Resolved");
//     }, 2000);
//   })
//   }
  
//   console.log("Promise Start");
//   promiseFunction()
//   .then((result) => {
//     console.log(result);
//     console.log("RESOLVE");
//   })
//   .catch((error)=>{
//   console.log(error)
//   console.log("REJECT");

//   });
//   console.log("Promise End");

// Async/Await

/*
Async/await is a syntactic sugar on top of promises.

It provides a more way to write asynchronous code, making it easier to read and write. 
With Async/Await, you can write asynchronous code that looks similar to synchronous code, 
and 

it uses promises under the hood.


In async/await, the async keyword is used to declare an asynchronous function. 
The await keyword is used to wait for a promise to be resolved before continuing with the execution of the function. 
The await keyword can only be used inside an async function.

*/

// Using Async/Await
async function asyncFunction() {
    try {
      console.log("Start");
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Resolved");
        }, 2000);
      });
      const result = await promise;
      console.log(result);
      console.log("RESOLVED");
    } catch (error) {
      console.error(error);
      console.log("REJECT");

    }
    console.log("End");
  }
  
  asyncFunction()

  // The only difference is the execution context between promise and async/await.
