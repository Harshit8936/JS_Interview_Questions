const marks = {
    A:36,
    B:72,
    C:85
}

// console.log(Object.keys(marks));
// console.log(Object.values(marks));
// console.log(Object.entries(marks));


function totalMarks(obj){
    let totalMarks = 0;
    for(let val of Object.values(obj)){
        totalMarks += val
    }
    return totalMarks;
}

// console.log("TOTAL MARKS is:",totalMarks(marks))

function studentEntries(obj){
    for(let [key,value] of Object.entries(obj)){
        console.log(`${key} got ${value} marks`)
    }
}

studentEntries(marks)

for(let key in marks){
    console.log('key',key)
    console.log('value',marks[key])
    console.log(`${key} got ${marks[key]} marks`)
}



