// rate limit in express

// spawn in cluster


// Show zero at last 
let arr1 = [2,0,1,2,0,2,1,0]

// using filter and concat
// arr1 = arr1.filter(num=>num!==0).concat(arr1.filter(num=>num===0))
// console.log(arr1)

let nonZeroIndex = 0;

for(let i=0;i<arr1.length;i++){
  if(arr1[i]!==0){
    [arr1[nonZeroIndex],arr1[i]] = [arr1[i],arr1[nonZeroIndex]];
    nonZeroIndex++
  }
}


console.log(arr1)// Another Efficient Way with Two Pointers (in-place):

// If you'd like to shift zeros to the end in place (without creating a new array), you can use a two-pointer approach, which is more efficient.

output - [2,1,2,2,1,0,0,0]



// show zeroes in beginning

// let arr1 = [2,0,1,2,0,2,1,0]


// let nonZeroIndex = arr1.length-1;

// for(let i=arr1.length-1;i>=0;i--){
//   if(arr1[i]!==0){
//     [arr1[nonZeroIndex],arr1[i]] = [arr1[i],arr1[nonZeroIndex]];
//     nonZeroIndex--
//   }
// }


// console.log(arr1)



// Remove zeroes from an array
let arr3 = [2,0,1,2,0,2,1,0];
arr3 = arr3.filter(num=>num!==0);
arr3 = arr3.filter(num=>num);
console.log(arr3)


let arr = [2,0,1,2,0,2,1,0]
arr = arr.filter(item=>item>=1)
console.log(arr)






let arr2 = [1,2,[3,[4,[5]]]]

function flattenArray(arr){
  let newArr = [];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      newArr = newArr.concat(flattenArray(arr[i]))
    }else{
      newArr.push(arr[i])
    }
  }
  return newArr
}


console.log(flattenArray(arr2))


let obj1 = {"a": 1, "b": {"c": 2}}

let obj = {"a": 1, "b": {"c": [2,3,4]}}




function flatObject(obj,parentKey='',result={}){
  for(let key in obj){
    let newKey = parentKey ? `${parentKey}.${key}` : key;
    if(typeof obj[key]=='object' && !Array.isArray(obj[key])){
      flatObject(obj[key],newKey,result)
    }else{
      result[newKey] = obj[key]
    }
  }
  return result
}


console.log(JSON.stringify(flatObject(obj)))


// output - {"a": 1, "b.c": 2}














// for(let item of arr){
  
//   if(item===0){
//     newArr.push(item)
//   }else{
//     modifyArr.push(item)
//   }
// }

// const actualArray = modifyArr.concat(newArr)
// console.log(actualArray)



// output - [2,1,2,2,1,0,0,0]
