let p1 = function fun1() {
    return new Promise((resolve, reject) => setTimeout(() => resolve('a'), 2000));
   };
    
   let p2 = function fun1() {
    return new Promise((resolve, reject) => setTimeout(() => resolve('b'), 1000));
   };
    
   let p3 = function fun1() {
    return new Promise((resolve, reject) => setTimeout(() => resolve('c'), 3000));
   };
    
   (async () => {
    console.log(1);
    console.log(await p1());
    console.log(await p2());
    console.log(await p3());
    console.log(10);
   })();


// Hoisting

// var x = 21;
// var girl = function () {
// console.log(x);
// var x = 20;
// };
// girl();


// find second highest element in an array
// let arr = [2,3,5,6,10,0,9];
// var temp;
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr[1])