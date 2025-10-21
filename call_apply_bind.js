/*
Call is a method that can be used to invoke (call) 
a method with a specified value of this and arguments provided individually.
*/

const person1 = {
    firstname:"John",
    lastname: "Doe"
}

const person2 = {
    firstname:"Jane",
    lastname: "Doe"
}

function fullName(greet){
    console.log(greet + this.firstname + " " + this.lastname);
}

fullName.call(person1,"Hello "); // Hello, John Doe
fullName.call(person2,"Hi "); // Hello, Jane Doe
fullName.call("Hello",person1)      // [object Object]undefined undefined

console.log("=====================================");

/*
Apply is similar to call() method but the only difference is that in apply you can pass the arguments as an array.

*/
function fullNameWithTitle(greet,title){
    console.log(greet + title + this.firstname + " " + this.lastname);
}
fullNameWithTitle.apply(person1,["Hello ","Mr. "]); // Hello, Mr. John Doe
fullNameWithTitle.apply(person2,["Hi ","Mrs. "]); // Hi, Mrs. Jane Doe
fullNameWithTitle.apply(["Hello"],person1)  // NaN undefined undefined
/*
Bind is a function that helps you create another function that you can execute later with a specified value of this.

*/
console.log("=====================================");

const person1FullNAme = fullName.bind(person1);
const person2FullNAme = fullName.bind(person2);

person1FullNAme("Hello "); // Hello, John Doe
person2FullNAme("Hi "); // Hi, Jane Doe