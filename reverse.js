// 1. Reverse a String With Built-In Functions
// function reverseString(str){
//         var splitString = str.split("");
//         console.log(splitString)
//         var reverseString = splitString.reverse();
//         console.log(reverseString);
//         var joinString = reverseString.join("");
//         console.log(joinString);
//         return joinString
// }

// chaining the three methods
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");


// 2 BY decrementing for loop
function reverseString(str){
    var newString = "";
    for(var i=str.length-1;i>=0;i--){
        newString += str[i]
    }
    console.log(newString)
}


reverseString('Hello');
// const a = reverseString('Hello');
// console.log(a);


const arr = [1,2,3,4];
// const reversed = arr.reverse();
// console.log("reversed",reversed)
// console.log("arr",arr);

// this will also change exiting array
// we can use toReversed();

const reversed1 = arr.toReversed();
console.log("reversed1",reversed1)
console.log("arr",arr);



// ES2023
const array = [3, 1, 2];

const reversed = array.toReversed(); // [2, 1, 3]  
const sorted = array.toSorted();


console.log(reversed)
console.log(sorted)