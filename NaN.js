if(NaN){
    console.log("Success")
}else{
    console.log("Failure")
}

console.log(NaN == false);
console.log(NaN === 0);
console.log(NaN === "");
console.log(NaN == 0);

console.log(NaN == NaN)
console.log(NaN === NaN)

console.log(Object.is(NaN,NaN))  // true