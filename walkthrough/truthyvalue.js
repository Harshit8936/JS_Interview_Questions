// LEFT AND RIGHT
// function left(){
//     return console.log("left")
// }

// function right(){
//     return console.log("right");
// }
// left() || right()

// order of exection is left to right 
// It will be execute until and unless they got truthy value then yeh execution will stop when they got truthy value
// function isPass(){
//     return 1
//     // return 0
// }
// function isFail(){
//     return false
// }

// let msg = isPass() || isFail();     
// console.log(`MSG: ${msg}`)


// with AND operator
// function isPass1(){
//     console.log('insidePass')
//     return 'True'
// }
// function isFail1(){
//     console.log('insidefail')
//     return 'False'
// }

// let msg1 = isPass1() && isFail1();     
// console.log(`MSG: ${msg1}`)



// WIPRO
function showMessage(marks){
    const message = marks || 'Absent';
    console.log(`Marks ${message}`)
}

showMessage(29);
showMessage(0);
showMessage(46);

