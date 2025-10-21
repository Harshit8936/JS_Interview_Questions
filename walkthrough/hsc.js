// useEffect(()=>{
  
// },[])

async function getData(){
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const user = await res.json();
// return user;
console.log(user)
}

getData();
// getData().then((data)=>{
//   console.log(data)
// }).catch((error)=>{
//   console.log(error)
// })

setTimeout(() => {
    console.log('timeout');
}, 0);
process.nextTick(() => {
    console.log('nextTick');
  });
var promise = new Promise((resolve, reject) => {
      console.log("Promise calling")
    resolve('promise');
});
promise.then((res) => console.log(res));
function second() {
    console.log('function');
}
second();



/*
Promise calling
function
nextTick
promise
timeout
*/


// let array = [-1, 0, 1, 2, 3]; 
// let even = array.filter(x => x); 
// console.log(even);   // [-1,1,2,3]


// However, the filter function you're using, x => x, 
// is essentially checking for truthy values, which means that it will remove all falsy values (like 0, false, null, undefined, and NaN).

// let flag = true;
// setTimeout(() => {
//     flag = false;
//     console.log("I am changing");
// }, 1);
// while (flag) {
//     console.log('Hello world');
// }


// Because the loop runs without pause, it will continue indefinitely, printing "Hello world" over and over, blocking the setTimeout callback from executing.
// The setTimeout callback, which is scheduled to execute after 1 millisecond, won't run until the current call stack is clear. Since the while loop is running indefinitely, the event loop never gets a chance to process the callback and set flag to false.