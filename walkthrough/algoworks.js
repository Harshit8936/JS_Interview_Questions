// find substrings and check palindrome or not


function isSubStringPalindrome(str){
    let arr = [];
    let subString = "";
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length-i;j++){
            subString = str.substring(i, j+i+1);
            if(subString == subString.split("").reverse().join("") && !arr.includes(subString)){
                arr.push(subString)
            }
        }
    }
    return arr;
}

console.log(isSubStringPalindrome("abba"))

/*
The two loops in the code are necessary because we need to explore all possible substrings of the input string. 
i outer loop is responsible for determining the starting point of each substring.
inner loop is responsible for determining the end point of each substring.
The substring method is used to extract the substring from the input string.


JS is a single threaded, behaviour is sync.
How we can make it asynchronous via promises, callback, timers function.
DOM, Event Loop in javascript

*/


