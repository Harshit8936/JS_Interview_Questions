// The slice() method returns selected elements in an array, as a new array.
// The slice() method does not change the original array.
// array.slice(start, end)

// slice return the in between data
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
const myBest = fruits.slice();  // will return existing array
console.log(myBest);
const neg = fruits.slice(-3,-1);        // will deduct from array length
console.log(neg);
const newArr = fruits.slice(1);
console.log(newArr)             // will get all after 1 index and including 1 index



