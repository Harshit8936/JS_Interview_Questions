var events = require('events');
var eventEmitter = new events.EventEmitter();


console.log("Events start");
//Create an event handler:
// var myEventHandler = function () {
//     console.log('I hear a scream!');
//   }
  
//   //Assign the event handler to an event:
//   eventEmitter.on('scream', myEventHandler);
  
//   //Fire the 'scream' event:
//   eventEmitter.emit('scream');


//Assign the event handler to an event:
eventEmitter.on('event1',()=>{
    console.log("Event 1 called");
})
eventEmitter.on('event2',()=>{
    console.log("Event 2 called");
})

setImmediate(()=>{
    console.log("Set Immediate is called");
})
setImmediate(()=>{
    console.log("Set Immediate 2 is called");
})
setTimeout(()=>{
    console.log("Set timeout called");
},0)
process.nextTick(()=>{
    console.log("Process.next tick called");
})
//Fire the 'event1' event:
eventEmitter.emit('event1');
eventEmitter.emit('event2');


console.log("Events End");



// yaha se event loop start hua
// Events start
// Event 1 called
// Event 2 called
// Events End
// aur yaha pe event loop finish hua (poora ka poora event loop finish hone ke baad)
// Process.next tick called
// Set timeout called
// Set Immediate is called
// Set Immediate 2 is called


// if you don't have any microtask queu 
// setImmediate(()=>{
//     console.log("Set Immediate 2 is called");
// })
// setTimeout(()=>{
//     console.log("Set timeout called");
// })

// Set Immediate 2 is called
// Set timeout called
