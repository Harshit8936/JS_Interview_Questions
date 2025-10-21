// SHALLOW COPY

/*
A shallow copy occurs when you copy the reference of an object to a new variable. 
In this process, only the top-level properties are copied, 
while nested objects or arrays still reference the original memory location.


When you assign one object to another using the assignment operator (=), a shallow copy is created:

*/

let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
let newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

/*
From the above example, it is seen that when the name of newEmployee is modified, 
it is also reflected for the old employee object. This can cause data inconsistency. 
This is known as a shallow copy. The newly created object has the same memory address as the old one.
*/


// DEEP COPY
/*
A deep copy, on the other hand, creates a completely independent copy of the object, 
including all nested objects or arrays. 

*/

let employee1 = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
let newEmployee1 = JSON.parse(JSON.stringify(employee1));
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);
console.log("---------After modification---------");
newEmployee1.ename = "Beck";
newEmployee1.salary = 70000;
console.log("Employee=> ", employee1);
console.log("New Employee=> ", newEmployee1);