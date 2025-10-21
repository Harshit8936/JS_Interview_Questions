for (var  i = 0; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}



let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);


let a = 6;
let b = a;
b = 7;
console.log(b);


function changeProperty(obj) {
    obj.property = 50;
    console.log('Inside function:', obj.property);
  }
  
let myObject = { property: 10 };
changeProperty(myObject);
console.log('Outside function:', myObject.property);


function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter1 = outer();
const counter2 = outer()


counter1();
counter2();
counter1();


// {2:2,3:1,4:2…}
const arr = [2,3,2,4,5,4]

let obj = {};

for(let i=0;i<arr.length;i++){
  let item = arr[i];
  if(obj[item]){
    obj[item]++
  }else{
    obj[item] = 1
  }
}

console.log(obj)



