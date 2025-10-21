// Freeze an object preventing new properties from being added or exisiting


const obj = {name:"Hello"};
Object.freeze(obj);
obj.name = "Nice";
console.log(obj)

console.log(Object.isFrozen(obj))


