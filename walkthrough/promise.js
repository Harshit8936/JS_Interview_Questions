/*
-- The entire script is initially executed as a macro task
-- During the execution, the synchronization code executes directly, 
and the macrotask enters the macro task queue, and the microtask enters the microtask queue
-- when a macrotask is completed, all other microtasks are executed in turn first, 
and then the next macrotask is executed.
--> Micrcotasks include: MutationObserver, Promise.then() and Promise.catch(), 
other techniques based on Promise such as the fetch API, V8 garbage collection process, process.nextTick() in node environment.

--> Macrotasks include: initial script, setTimeout, setInterval, setImmediate, I/O, UI rendering.

*/



//  <-----------------------------------1--------------------------------->
// Let's start with a simple example to explain the microtask.
const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  });
  
  promise1.then(() => {
    console.log(3);     // But we know () => {console.log(3);} is a microtask, so it is not immediately called.
  });
  
  console.log(4);
// output:- 1 4 3 

//  <-----------------------------------2--------------------------------->

// promise1 will always be in a pending state,
const promise2 = new Promise((resolve, reject) => {
  console.log(1);
});

promise2.then(() => {
  console.log(3);
});

console.log(4);
// output: 1 4




//  <-----------------------------------3--------------------------------->
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve('resolve1')
// })

// const promise2 = promise1.then(res => {
//   console.log(res)
// })

// console.log('promise1:', promise1);
// console.log('promise2:', promise2);

// output
/*
1
promise1: Promise { 'resolve1' }
promise2: Promise { <pending> }
resolve1

*/


//  <-----------------------------------4 with timeout--------------------------------->


// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1)
//   resolve('success')
// }));

// fn().then(res => {
//   console.log(res)
// });

// console.log(2)
// 1 2 success

//  <-----------------------------------5 with timeout--------------------------------->


// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// },0)

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')


//  <-----------------------------------6 with timeout--------------------------------->

console.log("Start")
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);




// ---------------------------------7 TIMEOUT------------------------

// const timer1 = setTimeout(() => {
//   console.log('timer1');

// const timer3 = setTimeout(() => {
//     console.log('timer3')
//   }, 0)
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// console.log('start')



//--------------------------8--------------------------


// const timer1 = setTimeout(() => {
//   console.log('timer1');
//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// console.log('start')


//-----------------------------9--------------------------

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('start');




//--------------------------------10---------------------

// const promise1 = new Promise((resolve, reject) => {
//   const timer1 = setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })

// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// const timer2 = setTimeout(() => {
//   console.log('promise1', promise1);
//   console.log('promise2', promise2);
// }, 2000)


