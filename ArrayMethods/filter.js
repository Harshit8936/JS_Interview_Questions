// filter method is used to filter the array element and return new array with specified result
// original array will not change in filter
let a = [1,52,45,9,87];
let newArray = a.filter((value,index,array)=>{
    return value>10
})
console.log(newArray);
console.log(a)


const givenArray = [390, 190, 311.85, 67, 19048, 5000, 670];
const modifiedArray = givenArray.filter(n=> n>200);
console.log(modifiedArray)


// filter population is greater than 50000
const arr = [
    { "name": "Shanghai", "population": 10000 },
    { "name": "Los Angeles", "population": 20000 },
    { "name": "New Delhi", "population": 5000 },
    { "name": "Mumbai", "population": 25000 },
    { "name": "Chicago", "population": 65000 },
    { "name": "Houston", "population": 100000 },
  ];

const newArr = arr.filter(({population})=> population>=50000) ;
console.log(newArr)


// Print students whose grade is less than 80
const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const filterArray = students.filter(student=>student.grade<80);
console.log('filterArray',filterArray)

// Q3.Print object having marks greater than 60 and rollNumber greater than equal 15.

let student =[
  {name:"Smith",rollNumber:31,marks:80},
  {name:"Jenny",rollNumber:15,marks:69},
  {name:"John",rollNumber:16,marks:35},
  {name:"Tiger",rollNumber:7,marks:55}
 ];

let output = student.filter(data=>data.marks>60 && data.rollNumber>=15);
console.log("output",output) 


// Find expensive products price is greater than 500

const products = [
  {name:"Phone",price:500},
  {name:"Laptop",price:2500},
  {name:"Charger",price:700},
  {name:"Pen",price:250},
]
    
const expensiveProducts = products.filter(product=>product.price>500);
console.log(expensiveProducts)