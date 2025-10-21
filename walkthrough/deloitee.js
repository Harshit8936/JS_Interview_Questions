console.log(10 + "5")   // 105
console.log(10 - "5")    //5

var a;
var b = null;
console.log(a==b);
console.log(a===b)
// console.log("==0)
console.log(Number(undefined))


let a =20;
function abcd(){
    let a =15
    console.log(a)
}
abcd()      // 15
let a =20;
function abc(){
    var a =10;
    let a =15
    console.log(a)
}
abc()

const [a,,b] = [10,20,30]
console.log(b)      // 30

const c = [10,,30]
console.log(c[1]) // undefined