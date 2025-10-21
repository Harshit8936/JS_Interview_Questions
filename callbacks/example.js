// examples of syncronous programming it will run the code one by one until they get the data and will not move ahead
// let a = prompt("Enter your name ?");
// let b = prompt("Enter your age ?");
// let c = prompt("Enter your location ?");
// console.log("Name is " +a + " Age is " + "Location is " +c)



// examples of Asyncronous programming  it means it is scheduled and running in background
console.log("Start as");
setTimeout(() => {
    console.log("Here i am asynchronous");
}, 2000);
console.log("End as");
