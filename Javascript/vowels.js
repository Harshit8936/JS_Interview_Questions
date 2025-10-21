const str = "Hey JS! You R AMAZING";
const vowels = ['a','e','i','o','u'];

function countVowels(data){
    let count = "";
    data.toLowerCase().split("").forEach(char=>{
        vowels.includes(char) && count ++
    })

    return count;
}

console.log(countVowels(str))

// if(vowels.includes(char)){
//     serachWords+= char
// }


// const str = "Hi, I am Harshit";
// const vowels = ['a','e','i','o','u']

// let vowelArr = []

// function findVowels(str){
//   str = str.toLowerCase();
// for(i=0;i<str.length;i++){
//   if(vowels.includes(str[i])){
//     vowelArr.push(str[i])
//   }
// }
//   return vowelArr
// }

// console.log(findVowels(str))




// let str = "Hey JS! You R AMAZING";
// const vowels = ['a','e','i','o','u'];
// str = str.toLowerCase();
// let count = 0;
// for(let i=0;i<str.length;i++){
//   if(vowels.includes(str[i])){
//     count++
//   }
// }

// console.log(count)
