/*
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

Provides encapsulation, allowing you to create private scopes for variables and functions.

*/


const pr = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Hello')
        },1500)
    })
}

(async()=>{
    const a = await pr();
    console.log(a)

    const b = await pr();
    console.log(b)

    const c = await pr();
    console.log(c)
})()