// EMPTY TWO ARRAYS
const arr1 = [1];
const arr2 = [1];
console.log(arr1==arr2);
/*
It returned false in both comparsion although the values are equals, 
number of elements are also equal so, why it returned false? because everything in javascript is an object 
and arrays are also objects therefore instead of comparing the values or number of elements , 
it checks the reference of those array which is different that's why it returned false in both the cases.

*/
//Example 2 -

let array1= [1,5,9,14,17];
let array2= [1,5,9,14,17];
let array3 = array1
console.log(array3 === array1);        // true
console.log(array3 === array2);    // false
/*
Well the reason it returned true while comparing array3 with array1 
is because we stored the reference of array1 in array3 so, both are pointing to the same reference while
array3 and array2 comparison returned false because they have different references.

*/


console.log(arr1.toString() === arr2.toString())
console.log(JSON.stringify(arr1) == JSON.stringify(arr2))