// The sort() method sorts an array alphabetically:


// The sort() method sorts an array alphabetically:


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);


// ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

// The difference between toSorted() and sort() 
// is that the first method creates a new array, keeping the original array unchanged, 
// while the last method alters the original array.


const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log("toSorted",months)
console.log("toSorted",sorted)

