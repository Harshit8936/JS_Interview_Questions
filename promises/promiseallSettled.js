// Promise.allSettled();

/*
It returns a single promise that is fullfilled with an array of result objects, one of each promise.
Each result object contains:-
status {either "fullfilled" or "rejected"} and
value {fullfilled value} or reason {rejection reason}

In this we will get combine results
*/

/*
Use case:-
It is very Useful when you want to process all promises, whether they successed or fail
and you want to gather information about the outcome of each promise.

*/

// Case 2:-
// f1-- resolve, f2-- rejected

const getData1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am resolved")
        },2000)
    })
}

const getData2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Some error occured")
        },1000)
    })
}

Promise.allSettled([
    getData1(),
    getData2()
]).then(data=>{
    console.log("COOL",data)
    data.forEach(result=>{
        if(result.status==='fulfilled'){
            console.log("Your fulfilled value is", result.value)
        }else{
            console.log("Your rejected reason is", result.reason)
        }
    })
}).catch(error=>{
    console.log("Wrong",error)
})