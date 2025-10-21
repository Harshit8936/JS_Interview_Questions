//The sort() method sorts the elements as strings in alphabetical and ascending order.

//The sort() method overwrites the original array.



const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruits.sort();


console.log(fruits)

// Create an Array
const points = [40, 100, 1, 5, 25, 10];
//"25" is bigger than "100", because "2" is bigger than "1".

// Sort the Array
points.sort()
console.log("without comparison", points)
// points.sort(function(a, b){return a-b});
// console.log(points)


let student =[
    {name:"Smith",rollNumber:31,marks:80},
    {name:"Jenny",rollNumber:15,marks:69},
    {name:"John",rollNumber:16,marks:35},
    {name:"Tiger",rollNumber:7,marks:55}
   ];
console.log(student.sort((a,b)=>a.marks - b.marks))   