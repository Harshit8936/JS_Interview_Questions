// Map create a new array by performing some operation on each array element.
// original array will not change in map

let arr = [25,45,11];
// console.log(arr)  // this will display as it is whole array
let a = arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value + 1
    // return value>11
})

// if we are using like value>11 or something then they will return the boolean value in the new array
console.log(a)

const arr1=[1,2,3,4,5];
function double(num){
  return num*2
}
const output = arr1.map(double);
console.log("Without ARROW function",output)


const givenArray = [477, 8914, 40461, 599148];
const newArray = givenArray.map(n=>n*2);
console.log(newArray)   // [ 954, 17828, 80922, 1198296 ]


// Convert first char into caps and Add s in each element
const givenArray1 = [ 'pen', 'book', 'code' ];
const newArr = givenArray1.map(n=> n.charAt(0).toUpperCase() + n.slice(1) + 's');
console.log(newArr)     // [ 'Pens', 'Books', 'Codes' ]


// Q1. Given an array of objects users, print fullname, age, and add one property hello with nice value .

const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
];

const fullArray = users.map(user=>{
    return {
      fullName:`${user.firstName} ${user.lastName}`,
      age:user.age,
      hello:"nice"
    }
  });
console.log(fullArray)

// Example 2: Get Only Names of Active Users

const users1 = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true }
];
const names = users1.filter(user=>user.active).map(user=>user.name);
console.log("names",names)

// Get name in objects
const nameObject = users1.filter(user=>user.active).map(user=>{
  return{
    name:user.name
  }
});
console.log("name",nameObject)

// Get user name with additional property
const addObject = users1.filter(user=>user.active).map(user=>{
  return {
    ...user,
    nice:"ok"
  }
})






