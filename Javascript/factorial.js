function factorial(n){
    let a = 1;
    if(n===0){
        return 1
    }else{
        for(let i=2;i<=n;i++){
            a = a * i
        }
        return a
    }
}
console.log(factorial(4))

// using recursive method
// function fact(n){
//     if(n===0){
//         return 1
//     }else{
//         return n * fact(n-1)
//     }
// }
// console.log(fact(5))
