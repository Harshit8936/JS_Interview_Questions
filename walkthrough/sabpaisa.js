// find occurances of string and o/p should be in object { a: 2, b: 2, c: 2, d: 1 }

let str = 'aabccbd';
let result = {};
for(let i=0;i<str.length;i++){
    let ch = str.charAt(i);
    if(!result[ch]){
        result[ch] = 1;
    }else{
        result[ch] += 1;
    }
}
console.log(result)

// string is palindrome or not 

function isPalindrome(str){
    let rev_str = "";
    for(let i=str.length-1; i>=0; i--){
        rev_str += str[i]
    }
    // return rev_str
    if(rev_str===str){
        console.log("passed string is palindrome ");
    }else{
        console.log("passed string is not palindrome ");
    }
}

isPalindrome("hellollehok")