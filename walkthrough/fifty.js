const inputStrings = ["Delhi", "Banglore", "Hyderabad"];
const specifiedValue = 36;

const arr = [];

for(var i=0;i<inputStrings.length;i++){
    var obj = {}
    obj[inputStrings[i]] = specifiedValue
    arr.push(obj)
}
console.log(arr)
console.log(JSON.stringify(arr))


//OUTPUT:-
//[
// { "Delhi": 36 },
// { "Banglore": 36 },
// { "Hyderabad": 36 }
// ]