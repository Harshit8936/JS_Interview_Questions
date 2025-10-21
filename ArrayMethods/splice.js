// The splice() method adds and/or removes array elements.

// The splice() method overwrites the original array.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2,1,"orange");
console.log(fruits);
fruits.splice(1)        // ["Banana"]


let arr = [1,2,3,4,5,6]
// 2,3==>7
arr.splice(1,2,7)   // from where to start, what you need to remove, what you have to insert
console.log(arr)



/*
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that 
the new method creates a new array, keeping the original array unchanged, 
while the old method altered the original array.



*/

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log("toSpliced",months)
console.log("toSpliced",spliced)


// ECMAScript 2023 current version of JS and in June 2023

