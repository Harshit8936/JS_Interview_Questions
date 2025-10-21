// remove duplicate elemets from an array


// using filter method

let arr = [1,2,3,2,1,5]

function removeDuplicate(arr){
        return arr.filter((value,index)=>arr.indexOf(value) === index)
}
console.log(removeDuplicate(arr));

// using SET method
/*
This method sets a new object type with ES6 (ES2015) that allows you to create collections of unique values.
*/

let arr1 = ["apple","manog","orange","orange","banana","apple"];
function removeSet(arr){
    // return [new Set(arr)]       
    return [...new Set(arr)]
}
console.log(removeSet(arr1));


// diffrenece between null and undefined
console.log(null == undefined)          // true
console.log(null === undefined)            // false
// it means null is equal to undefined but not indentical.

// Undefined means a variable has been declared but has yet not been assigned a value.
// Null is an assignment value. It can be assigned to a variable as a representation of no value. 