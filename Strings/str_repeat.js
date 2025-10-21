let str = "a2b3c2";
let result=""
for(let i=0;i<str.length;i++){
    let char = str[i];
    let repCount = parseInt(str[i+1]);
    for(j=0;j<repCount;j++){
    result += char
    }
    //   result += char.repeat(repCount); // append repeated character
}
console.log(result)


// let str = "2a3b3c";
// let result = "";
// for(let i=0;i<str.length;i++){
//     let char = str[i+1];
//     let repCount = parseInt(str[i]);
//     for(let j=0;j<repCount;j++){
//         result += char
//     }
// }

// console.log(result)    // aabbbccc


