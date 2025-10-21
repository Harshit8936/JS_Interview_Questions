const nestedObject = {
    name: "Alice",
    address: {
        city: "Wonderland",
        details: {
            street: "Rabbit Hole",
            number: 42
        }
    },
    age: 25
};

let newObj = {};
const flatObject = (obj,name='student')=>{
    for(let key in obj){
        const newKey = `${name}_${key}`
        if(typeof obj[key] == 'object'){
            flatObject(obj[key],newKey)
        }else{
            newObj[newKey] = obj[key];
        }
    }
}

flatObject(nestedObject)
console.log(newObj)



// {
//     "name": "Alice",
//     "address.city": "Wonderland",
//     "address.details.street": "Rabbit Hole",
//     "address.details.number": 42,
//     "age": 25
// }

// how we will use cookie only on server side 
let str = "Try programiz.pro";
 str[0] = 'H';
 console.log(str);
// string are immutable once a string is created, its contents cannot be changed.

// only objects and arrays are mutable, not primitive values. 


const obj = {
    a:1,
    b:2,
    c:{
        d:3,
        e:{
            f:5,
            g:6,
        }
    }
}

 function flattenObject(obj,parentKey='',result={}){
    for(let key in obj){
        // if(obj.hasOwnProperty(key)){
            const newKey = parentKey ? `${parentKey}.${key}`: key;
            console.log('newKey',newKey)
            if(typeof obj[key]=='object' && obj[key]!=null){
                flattenObject(obj[key],newKey,result)
            }else{
                result[newKey] = obj[key]
            }
        // }
    }

    return result;
 }
 console.log(flattenObject(obj));










const result = {
    'a':1,
    'b':2,
    'c.d':3,
    'c.e.f':5,
    'c.e.g':6

}