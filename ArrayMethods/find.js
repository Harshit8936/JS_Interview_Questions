/**
The find() method returns the value of the first element that passes a test.

The find() method returns undefined if no elements are found.

The find() method does not execute the function for empty elements.

The find() method does not change the original array.
 * 
 * 
 *  */ 
const ages = [3, 10, 18, 20];


const findAges = ages.find((element)=> element > 10)

console.log(findAges)

const findAges1 = ages.filter((element)=> element > 10)

console.log(findAges1)

// find() returns the first matching element, while filter() returns an array of all matching elements. 

