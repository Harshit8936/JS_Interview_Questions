/**
It is used when you want to execute multiple asynchronous operations in parallel 
and wait for all of them to complete before moving on.

So Promise.all will wait until they get the perform all async operations.

All promises are fullfilled

Promise.all will handle only and only when all the promises are fulfilled but in 2 case one of them are not fulfilled.
So in that case in future you have multiple functions and one of them is not fufilled then it will go in catch part always in Promise.all
*/ 

// Case 1:-
// f1-- resolve, f2-- resolve, f3--resolve

const function1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data from function1")
        }, 2000);
    })
}

const function2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data from function2")
        }, 1000);
    })
}

const function3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve("Data from function3")
            const data = [1,2,3,4,5];
            resolve(data)
        }, 3000);
    })
}


Promise.all([
    function1(),function2(),function3()
]).then(dataArray=>{
    console.log('PromiseAll',dataArray)
}).catch(error=>{
    console.log('PromiseAll',error)
})

// Case 2:-
// f1-- resolve, f2-- rejected
const getData1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Data from getData1")
        }, 2000);
    })
}

const getData2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Error data not available")
        }, 2000);
    })
}

Promise.all([
    getData1(),
    getData2()
]).then(data=>{
    console.log("case2",data)
}).catch(error=>{
    console.log("case2",error)
})
