// using for loop
let num = [1,25,65,8];
// for (let i=0;i<num.length;i++){
//     console.log(num[i])
// }

// if i want to display square for each array element
// num.forEach((element) => {
//     console.log(element*element)
// });

// for each is used to perform some operation on existing array element

const a = [1,2,3,4,5];
a.forEach((value,index,array)=>{
    console.log(value*value, index);
    console.log(array)      // your entire array
    // return value*value      // so foreach will not return anything 
})


// the main difference between map and forEach is that 
// map returns a new array with the results of the function, 
// while forEach does not return anything and only modifies the original array and doesn't change original array.


// ForEach loop
/*
It contains the callback function and each element from array is passed to callback function
Because of call back function you cannot use await and it is slower than for loop
You can not use break

*/


// For Loop
/*
It is faster then foreach loop
You can use break and await 
In for loop you can break the loop as per the requirements(because they have index, condition and inc/dec of index variable)

*/



let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}

  do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);