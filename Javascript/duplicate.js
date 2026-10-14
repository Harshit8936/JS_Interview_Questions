let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
let unique = [];
for (i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
  }
}
return unique;
}
console.log(removeDuplicates(arr));

console.log([...new Set(arr)]);
function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
console.log(removeDuplicates(arr));

let newArr = [1, 2, 3, 1, 5, 6, 5, 6];
let uniqueArr = [];
uniqueArr = newArr.filter((item,index)=>item!=newArr.indexOf(item));
console.log(uniqueArr);

/*let arr = [NaN];

arr.indexOf(NaN); // returns -1; meaning NaN is not present
arr.includes(NaN); // returns true
The behavior is also different in case of undefined.
let arr = [ , , ];

arr.indexOf(undefined); // returns -1; meaning undefined is not present
arr.includes(undefined); // returns true

*/