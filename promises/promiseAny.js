/*
It is used to handle multiple promises and resolving with the value of the first fullfilled/resolved promise, similar to
Promise.race().

However, Unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects.

instead it waits until atleast one promise resolved/fullfilled

It will always giving me the first resolved promises.
if all rejected then will returns all rejected promises with aggregated report
*/

const getMessage = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Get message from API 1")
        }, 500);
    })
}

const getUsers = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Error: from USERS API")
        }, 200);
    })
}

const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Error: from PRODUCTS API")
        }, 1000);
    })
}


Promise.any([
    getMessage(),
    getUsers(),
    getProducts()
]).then(result=>{
    console.log("First successful result", result)        //will log the first resolved promise result
}).catch(error=>{
    console.log("All promises rejected", error)         // will log all rejection reasons if all promises reject
})


// if all resolved then will get data from those promise whose executed first