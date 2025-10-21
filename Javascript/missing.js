const numbers1 = [2, 3, 1, 5];


function findMissingNumber(arr){
    const sortedArray = arr.sort((x,y)=>x-y)
    // return sortedArray
    for(let i=0;i<sortedArray.length;i++){
        if(sortedArray[i]!==i+1){
            return i+1
        }
    }
    // return sortedArray.length+1
}

console.log("Missing number is",findMissingNumber(numbers1))


const numbers = [2, 3, 1, 5, 7];
const missingNumbers = [];

// Find the range of numbers (from 1 to the maximum number in the array)
const min = Math.min(...numbers);
const max = Math.max(...numbers);

// Loop through the range and check for missing numbers
for (let i = min; i <= max; i++) {
  if (!numbers.includes(i)) {
    missingNumbers.push(i); // Push missing number to the array
  }
}

console.log(missingNumbers);