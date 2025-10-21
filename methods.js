// test () and exec () are RegExp expression methods used in javascript. 

// exec()
/*
We'll use exec () to search a string for a specific pattern, and if it finds it, 
it'll return the pattern directly; else, it'll return an 'empty' result.
*/

let text = "The best things in life are free";
let result = /e/.exec(text);
console.log(result)

// test()
/*
We will use a test () to find a string for a specific pattern. 
It will return the Boolean value 'true' on finding the given text otherwise, it will return 'false' 
*/
let text1 = "The best things in life are free";
let result1 = /z/.test(text1);
console.log(result1)


