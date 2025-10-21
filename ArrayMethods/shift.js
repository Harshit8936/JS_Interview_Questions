// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// just like pop but start from first element instead of the last.


// The shift() method returns the value that was "shifted out":

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log("Shift",fruit)



// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// The unshift() method returns the new array length:

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let fruit1 = fruits1.unshift("hello");
console.log("Unshift",fruit1)



