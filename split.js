var arr1 = "john".split('');
console.log(arr1);          // [ 'j', 'o', 'h', 'n' ]
var arr2 = arr1.reverse();
console.log(arr2);          //[ 'n', 'h', 'o', 'j' ]

var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr2);          //[ 'n', 'h', 'o', 'j', [ 'j', 'o', 'n', 'e', 's' ] ]


console.log(`array 1: length: ${arr1.length} AND last= ${arr1.slice(-1)}`);
console.log(`array 2: length: ${arr2.length} AND last= ${arr2.slice(-1)}`);

// In JavaScript, the split method is used on strings, not directly on number values. 
// If you want to split a number, you first need to convert it to a string.
