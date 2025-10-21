const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc,curr)=>{
    acc += curr*curr;
    return acc;
},0)
console.log(sum)

let newSum = 0;
for(let item of arr){
    newSum += item *item
}
console.log(newSum)


// find min and max and return sum of them
const arr1 = [1, 2, 3, 4, 5,-4];
var min = arr[0]
var max = arr[0]
for(let item of arr1){
    if(item<min){
        min = item
    }else{
        max = item
    }
}
var sum1 = min + max
console.log(min,max)
console.log(sum1)