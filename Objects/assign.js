// copied the values  one object it will take target,source and return target object


// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person2 = {firstName:"Ram",lastName:"Singh",hello:"nice"};
const result = Object.assign(person1,person2);          
console.log(result)

