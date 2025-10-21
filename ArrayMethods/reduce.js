// it will reduce an array to a single value
let arr = [5,1,7,1,6,9];
// it will take first two values then pass these values to reduce function then resulting value then will take again another value from array until array fnish and display the final output.
const arrayFunc = arr.reduce((pre,current)=>{
    console.log(pre,current)
    return pre+current
},0)
console.log("New",arrayFunc)



// Q2. Given an array of objects users, print user of particular age along with their frequency.

const users=[
    {firstName:"john",lastName:"Biden",age:26},
    {firstName:"jimmy",lastName:"cob",age:75},
    {firstName:"sam",lastName:"lewis",age:50},
    {firstName:"Ronald",lastName:"Mathew",age:26},  
    {firstName:"Some",lastName:"where",age:50}, 
  ];

const output = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++
    }else{
        acc[curr.age] = 1
    }
    return acc;
},{})  
console.log("output",output)


let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];
// Q4.Print sum of marks of all the student
const totalMarks = student.reduce((prev,curr)=>{
    prev +=curr.marks
    return prev;
},0)
console.log("totalMarks",totalMarks)


// Q5. Print name with marks in single object and name should be in upper case
const namesWithMarks = student.reduce((prev,curr)=>{
    prev[curr.name.toUpperCase()] = curr.marks
    return prev
},{})  
console.log("namesWithMarks",namesWithMarks)

// Example 3: Count Occurrences of a Specific candidate
const votes = [
    { candidate: 'Alice', votes: 5 },
    { candidate: 'Bob', votes: 3 },
    { candidate: 'Alice', votes: 2 },
    { candidate: 'Nice', votes: 2 }
];

const candidates = votes.reduce((acc,curr)=>{
    acc[curr.candidate] = (acc[curr.candidate] || 0) + curr.votes
    return acc;
},{})
console.log("candidates",candidates)

var data = votes.reduce((acc,curr)=>{
    if(!acc[curr.candidate]){
      acc[curr.candidate] = curr.votes
    }else{
      acc[curr.candidate] += curr.votes
    }
    return acc;
  },{})
console.log("data",data)

const arrayCandidates = Object.entries(candidates).map(([key,value])=>{
    return{candidate:key,totalVotes:value}
})
console.log("arrayCandidates",arrayCandidates)


let students =[
    {name:"Smith",rollNumber:31,science:80,maths:70,english:85},
    {name:"Jenny",rollNumber:15,science:85,maths:50,english:58},
    {name:"John",rollNumber:16,science:70,maths:60,english:69},
    {name:"Tiger",rollNumber:7,science:60,maths:78,english:78}
];

const res = students.reduce((acc,curr)=>{
    let total = curr.science + curr.maths + curr.english;
    if(!acc[curr.name]){
        acc[curr.name] = total
    }
    return acc;
},{})
console.log("res",res)

// output:- { Smith: 235, Jenny: 193, John: 199, Tiger: 216 }


const obj = {}
  for(let item of students){
      let marks = item.science + item.maths + item.english;
      res[item.name] = marks
  }  
  console.log(obj)
