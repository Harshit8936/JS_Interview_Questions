// Promise.race() to see which promise settles first
// they will return those promise whose taking less time either fulfilled or rejected 
// which one is winning the race either fullfilled or rejected
const P1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Resolved")
        }, 2000);
    })
}

const P2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Rejected")
        }, 1000);
    })
}

Promise.race([P1(),P2()]).then(result=>{
    console.log("RESOLVED",result)
}).catch(err=>{
    console.log("REJECTED",err)
})