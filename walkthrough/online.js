// ---------------------------------------

let str = "Hello";
str[0] = "h";
console.log(str)        
// Hello

// -------------------------------------

let x = (1,2,3,4);
console.log(x[2])
// undefined

// -------------------------------------
var fname = "Javascript";

function printName(){
    // console.log(fname)
    const fname = "HTML";
    console.log(fname)
}
console.log(fname);
printName();
// JS HTML

// -------------------------------------
let a = [1,2,3,4,5,6];
a[a.length - 1]++;
console.log(a)
// [1,2,3,4,5,7]


// --------------------------------------

console.log(1 + 2 + "3");       //33
console.log("1" + 2 + 3);       //123


// --------------------------------------
const arr = [1,2,3]
arr[5] = 6
console.log(arr.length)     //6
console.log(arr)        //  [ 1, 2, 3, <2 empty items>, 6 ]


// --------------------------------------
let n ="20"
console.log(n + 1)      //201
console.log(++n)      //21
console.log(n++)    //21


//------------------------------------------

const str = "a.b.c.d.e";
const strArr = str.split(".");

const obj = strArr.reduceRight(cb);

function cb(acc,curr){
    return {[curr]:acc}
}

console.log(JSON.stringify(obj,null,2))