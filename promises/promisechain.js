let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
            console.log("Resolve after 2 seconds");
            resolve(56)
    }, 2000);
})


p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {resolve("Promise 2")}, 2000);
    })
    return p2;
}).then((value)=>{
    console.log("We are done");
    return 2;
}).then((value)=>{
    console.log("mow we are pakka done" +value)
}).catch((error)=>{
    console.log("smething went wrong"+error)
})


// we can resolve this chaining process via async/await