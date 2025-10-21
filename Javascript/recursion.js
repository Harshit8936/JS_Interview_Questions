/*A recursive function is a function that calls itself somewhere within the body of the function.

Every time you write a recursive function, three elements must be present. They are:

The function definition.
The base condition.
The recursive call.


*/

//Why do you need a base condition?
//Without the base condition, you will run into infinite recursion. A situation where your function continues calling itself without stopping, like this:

// function doSomething(action) {
//   console.log(`I am ${action}.`)
//   doSomething(action)
// }

// doSomething("running")

function doSomething(n){    // function definition
    if(n===0){              // base condition
        return console.log('TASK COMPLETED');  
    }
    console.log("I AM DOING");
    doSomething(n-1);       // recursive call
}
doSomething(3)


const arr = [1, 2, 3, 4, 5];

function iterateArray(index) {
    if (index < arr.length) {
        console.log(arr[index]); // Print current element
        iterateArray(index + 1); // Call the function again with the next index
    }
}

iterateArray(0); // Start recursion from the first element