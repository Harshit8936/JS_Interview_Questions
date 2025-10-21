// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.





// Promise - state | result
// A promise is a 'PROMISE OF CODE EXECUTION' 
/*
Initially state will be pending then it change to either fulfilled(resolve) or rejected(reject). Promise give the suruty to execute the function because it will give the result.
resolve(value)--> If the job is finished successfully.
reject(error)--> If the job is fails.
*/

// why use promises
/*
    all tasks execute parrelly app yeh nahi chhate ki first wala task aape thread ko block karke baith jaaye, so you want to execute task parallel.
    Promises is used basically for parallel execution
    Fetch google.com page  ===> then you want to console.log("google.com home done")
    Fetch data from the data api  ===> then you want to console.log("data fetch done")
    Fetch pictures from the server  ===> then you want to console.log("fetch pictures done")
    Print downloading  ===> then you want to console.log("downloading done")
    Rest of the script
*/


// console.log("Start promises");
// function helloPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let error = true;
//             if(!error){
//                 console.log("Function Success:")
//                 resolve("Wow ! you get success");
//             }else{
//                 console.log("Function failed");
//                 reject("OOps ! you get fail");
//             }
//         }, 2000);
//     })
// }
// helloPromise().then((data)=>{
//     console.log("Good function is resolve " + data)
// }).catch((err)=>{
//     console.log("Bad function is rejected " + err)
// })
// console.log("End promises");


console.log("Start Promise");

function myPromise(){
    return new Promise((resolve,reject)=>{
        // setTimeout(()=>{
            let err = false;
            if(!err){
                resolve("You got success");
            }else{
                reject("You got failure")
            }
        // },2000)
    })
}

myPromise().then((data)=>{
    console.log("Resolved",data)
}).catch((error)=>{
    console.log("Rejected",error)
})

console.log("End Promise")


/*
The executor function of a Promise is executed immediately when the promise is created,
but the resolution or rejection (code in .then() or .catch()) is executed asynchronously.


Even if the promise is resolves immediatley its resoultion will happen after current sync stack is cleared
meaning other sync tasks will execute first.


*/









