/*
There is special syntax to work with promise in JS
we can make any function async and then we can await promise in it
An async function will always return the promises

*/

console.log("Start ASYNC AND AWAIT")
async function hello(){
    console.log("Inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log('Before response');
    const users = await response.json();
    return users
}

console.log('Before Calling');
let a = hello();
console.log("After calling");
console.log(a);
a.then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})
console.log("LAST LINE OF JS");



// with promise
// async function harry(){
// let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//                 resolve("27 degree")
//         }, 2000);
// })
// let bangWeather = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//             resolve("21 degree")
//     }, 5000);
// })
//     // delhiWeather.then(alert)
//     // bangWeather.then(alert)
//     console.log("Fetching delhi weather please wait........")
//     let delhi = await delhiWeather;
//     console.log("Fetced DELHI weather " + delhi)
//     console.log("Fetching Banglore weather please wait........")
//     let banglore = await bangWeather;
//     console.log("Fetced BANGLORE weather " + banglore)
//     return [delhi,banglore]
// }

// console.log("WElcome to weather")
// let a = harry();
// a.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })


// EXAMPLE
/*
Async for asynchronous operation and We use await keyword to wait for a promise to be resolved before continuing to the next line of code.

Example:-
Before going to work @ 8:am you need to complete the your morning routine.

You have 5 routine:-
1. Take a shower
2. Eat breakfast
3. Get Dressed
4. Put on makeup
5. Read the news

You have 2 choices :- Doing each activity in a row or completing all activities no order matter

// order matter

*/
const orderMatter = async(startTime)=>{
    const step1FinishTime = await shower(startTime);
    const step2FinishTime = await eatBreakFast(step1FinishTime);
    const step3FinishTime = await getDressed(step2FinishTime);
    const step4FinishTime = await doMakeup(step3FinishTime);
    const step5FinishTime = await readNews(step4FinishTime);
    return step5FinishTime;

}
