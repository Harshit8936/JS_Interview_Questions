/*
The some() method returns true (and stops) if the function returns true for one of the array elements.

The some() method returns false if the function returns false for all of the array elements.

The some() method does not execute the function for empty array elements.

The some() method does not change the original array.
*/

const ages = [3, 10, 18, 20];


const findAges = ages.some((element)=> element > 10)

console.log(findAges)   

// A boolean	true if any of the aray elements pass the test, otherwise false. ES3