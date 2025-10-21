function reverse(str,subStr){
    return str.split(subStr).reverse().join(subStr);
}

let str = "Welcome to the Javascript Series";
let str1 = reverse(str,"");
let str2 = reverse(str1," ")
console.log(str1)
console.log(str2)



// let str = "Welcome to the Javascript Series";
// str = str.split(" ").reverse().join(" ");
// console.log(str)