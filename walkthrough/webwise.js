const a = {name:"Ram"};
const b = a
const c = {...a}

const [x,y] = [1,2,3,4,5];
// const hey = useState

console.log(a)
console.log(b)
console.log(c)

console.log(a==b)   // true
console.log(b==a)   // true
console.log(c==a)   // false



// a == b
// true because b and a refer to the exact same object in memory.

// b == a
// true for the same reason as the previous comparison.

// c == a
// false because c is a new object created by copying the properties of a, 
// so although they have the same properties, they are different objects (different references in memory).