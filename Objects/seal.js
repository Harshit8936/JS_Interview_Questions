// seal an object, you can not add new property but mondified exisitng property values


const obj = {name:"hello"};
Object.seal(obj);

obj.name = "nice";
obj.age = 25;
console.log(obj)


// return true if object is seal or not otherwise returns false
console.log(Object.isSealed(obj));