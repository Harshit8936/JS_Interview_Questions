// A positive integer is called an Armstrong number (of order n) if

// 153 = 1*1*1 + 5*5*5 + 3*3*3
// 1634 = 1*1*1*1 + 6*6*6*6* + 3*3*3*3 + 4*4*4*4
// 370,371,407

// const number = "1634"
// const numberOfDigit = number.length;
// let sum = 0;

// let temp = number;
// while(temp > 0){
//     let remainder = temp % 10;
//     sum += remainder ** numberOfDigit;
//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer

// }
// if(sum==number){
//     console.log(`${number} is an Armstrong number`);
// }else{
//     console.log(`${number} is not an Armstrong number`);
// }

// Without string

const number = 370;
const digit = number.toString().split('');                 // convert the numeric values to string
const numberOfDigit = digit.length;
let sum =0;

for(let num of digit){
    sum += parseInt(num) ** numberOfDigit
}
if(sum===number){
    console.log(`${number} is an Armstrong number`)
}else{
    console.log(`${number} is not Armstrong number`)
}

