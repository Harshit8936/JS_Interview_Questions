const arr = [62,33,12,90,10,28,24,90];
var first = arr[0];
var second = arr[0];
for(var i=0;i<arr.length;i++){
    if(first<arr[i]){
        second = first;
        first = arr[i]
    }else if(second<arr[i] && first!==arr[i]){
        second = arr[i]
    }
}
console.log(`Second is ${second}`)


// find largest element
// const arr = [62,33,12,90,10,28,24];
// var max = arr[0];
// for(var i=0;i<arr.length;i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(`Largest is ${max}`)