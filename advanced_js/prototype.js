// Prototypes are the mechanism by which JS objects inherit features from one another.


// JS objects have special property called prototype that is either null or referneces of another object 
let a = {
    name:"Hasrru",
    age:25
}

console.log(a);

// you can set the prototype for any object

let p ={
    run: ()=>{
        alert('Yes')
    }
}

a.__proto__ = p;
a.run();

