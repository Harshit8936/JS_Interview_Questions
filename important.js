// simple callback synchronous function

function execOperation(callback) {
    console.log('executing operation');
    callback();
}

function importantOperation() {
    console.log('important operation');
}
execOperation(importantOperation);

// aSYNC function 
// function doSomethingAsync(callback) {
//     setTimeout(function() {
//       console.log("Async operation done!");
//       callback();
//     }, 1000);
//   }


function func1(callback) {
    setTimeout(() => {
        console.log('func1 done !');
        callback();
    }, 1000)
}
function func2(callback) {
    setTimeout(() => {
        console.log('func2 done !');
        callback();
    }, 2000)
}
function func3(callback) {
    setTimeout(() => {
        console.log('func3 done !');
        callback();
    }, 3000)
}

// callback hell
func1(() => {
    func2(() => {
        func3(() => {
            console.log('all functions done !');
        })
    })
})

// as you can see above calling is become pyramid of doom

// WITH PROMISES AND BECOME A PROMISE CHAINing

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fun1 done !');
            resolve();
        }, 1000)
    })
}

function fun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fun2 done !');
            resolve();
        }, 2000)
    })
}

function fun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fun3 done !');
            resolve();
        }, 1000)
    })
}

fun1()
    .then(() => fun2())
    .then(() => fun3())
    .then(() => {
        console.log('all functions done!')
    }).catch((error) => {
        console.log(error)
    })

// This increased readability,


// async await
async function main() {
    try {
        console.log("All function start executing !")
        await fun1();
        await fun2();
        await fun3();
        console.log('all functions done !');
    } catch (error) {
        console.log(error)
    }
}
main();


// promise chaining real life example
function getBread(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Got the bread');
            resolve('Bread')
        },1000)
    })
}

function addFillings(bread){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Added fillings');
            resolve(bread +' Fillings')
        },1500)
    })
}

function serve(sandwich){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Sandwich is ready to eat');
            resolve(sandwich)
        },1000)
    })
}

getBread()
.then(addFillings)
.then(serve)
.then(finalProduct=>console.log(`Enjoy your ${finalProduct}`))
.catch(error=>console.log(`Something went wrong ${error}`))

