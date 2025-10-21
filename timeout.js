// seettimeout bascially is used to set the code of execution
console.log("SETtimeout start")
let a = setTimeout(() => {
    alert("HELLOW wOrLD");
}, 2000);
console.log("SETtimeout end")
console.log(a);     // timer id
let b = prompt("Do you want to run the timeout");
if("n"==b){
    clearTimeout(a)
}


// setinterval is use to continously do the code of execution
// console.log("SETINTERVAL start")
// setInterval(() => {
//     alert("HELLOW wOrLD");
// }, 5000);
// console.log("SETINTERVAL end")

/*
Understanding process.nextTick() method: Whenever a new queue of operations is initialized we can think of it as a new tick. The process.nextTick() method adds the callback function to the start of the next event queue. It is to be noted that, at the start of the program process.nextTick() method is called for the first time before the event loop is processed. 

Syntax:- process.nextTick(callback);


Understanding setImmdeiate() method: Whenever we call setImmediate() method, it’s callback function is placed in the check phase of the next event queue. There is slight detail to be noted here that setImmediate() method is called in the poll phase and it’s callback functions are invoked in the check phase.

Syntax:setImmediate(callback);


*/
