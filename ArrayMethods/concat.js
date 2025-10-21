// The concat() method does not change the existing arrays. It always returns a new array.


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];


const newArr = arr1.concat(arr2,arr3);
console.log("concat",newArr)

const arr = ["Emil", "Tobias", "Linus"];
const myChildren = arr.concat("Peter"); 


console.log("with values",myChildren)