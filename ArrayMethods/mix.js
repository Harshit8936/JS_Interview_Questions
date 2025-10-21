// find even elements and get the squares of each element

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const squareOfEvenNumbers = numbers.filter(num => num % 2 ===0).map(value=>value*2);
console.log("squareOfEvenNumbers",squareOfEvenNumbers)

//Chaining

// Q5.List of all firstName with fullname from array whose age is more than 30 and display first letter in caps

const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"Cob",age:75},
    {firstName:"sam",lastName:"Lewis",age:50},
    {firstName:"ronald",lastName:"Mathew",age:26},  
];

const output = users.filter(user=>user.age>30).map((data)=>{
    return {
        fullName:`${data.firstName.charAt(0).toUpperCase()+data.firstName.slice(1)} ${data.lastName}`,
        age:data.age
    }
})

console.log("output",output)


// Q6.Print the names of students who scored more than 60
let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
];

const students = student.filter(data=>data.marks>60).map((x)=>{
    return x.name
});
console.log("students",students)


//Q7.Print total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60

const totalMarks = student.map((stu)=>{
    if(stu.marks<60){
        stu.marks += 20
    }
    return stu
}).filter(x=>x.marks>60).reduce((prev,curr)=>{
    prev += curr.marks
    return prev;
},0)

console.log("totalMarks",totalMarks)

// Example 1: Calculate Total Price of Available Products

const products = [
    { name: 'Laptop', price: 1000, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 300, available: true }
];

const response = products.filter(product=>product.available).reduce((acc,curr)=>(acc += curr.price),0);
console.log("Total available products price is",response)

// Example 4: Given an array of employee objects, filter out those who are not managers, 
// then map to create an array of their names in uppercase.

const employees = [
    { name: 'Alice', role: 'Manager' },
    { name: 'Bob', role: 'Developer' },
    { name: 'Charlie', role: 'Manager' }
];

const filterEmp = employees.filter(emp=>emp.role!=='Manager').map(emp=>emp.name.toUpperCase())

console.log("filterEmp",filterEmp)


// return totalMarks of each student and show those students whose rollnumber is greater than or equal to 15

const data =[
    {name:"Smith",rollNumber:31,science:80,maths:70,english:85},
    {name:"Jenny",rollNumber:15,science:85,maths:50,english:58},
    {name:"John",rollNumber:16,science:70,maths:60,english:69},
    {name:"Tiger",rollNumber:7,science:60,maths:78,english:78}
];

const responses = data.map((student)=>{
    let total = student.science + student.maths + student.english;
    return{
        name:student.name,
        rollNumber:student.rollNumber,
        totalMarks:total
    }
}).filter(data=>data.rollNumber>=15)

console.log("RESPONSES",responses)





