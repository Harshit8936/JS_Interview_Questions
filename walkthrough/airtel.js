

// Const nums = [6, 0, 2, 5, 0, 9, 9, 0, 3, 0];

// Index =0;

// Will run the for loop
	
// 	if(item!==0){
// 	[arr[i],arr[index]] = [arr[index],arr[i]];
	
// Index++
// }

// Output of the following code

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000)
// }

// 0 1 2 3 4



// Baking, vegetable chopping, assembling, base preparation, delivery

// Async orchestrator() {



// }

// Async baking() {
// 	Return new Promise((resolve,reject)=>{
// 	Let base_prep = true;
// 	if(base_prep){
// 		resolve();
// 	}else{
// 		reject();
// })
// }

// Promise.allSettled([baking(),orchestrator()]).then((data)=>{
// 	console.log(“Baking done”,data)
// }).catch((error)=>{
// console.log(“Something went wrong while baking”,error)
// })


console.log(0.1 + 0.2 === 0.3) 
// This happens because of how floating-point arithmetic works in JavaScript
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true


// console.log(‘5’ - ‘2’)
// console.log(‘5’ + ‘2’)




// 2nd Dec
// timestamp | pageid | userid


// 3rd Dec 
// timestamp | pageid | userid

// Loyal customers -> 

// They should have visited on both the days AND
// They should have visited atleast 2 distinct pages



const a = [1,2,3];
const b = [1,2,3];
const c = '1,2,3';

// console.log(a.toString())
// console.log(c)
console.log(a==b)
console.log(a===b)
console.log(a==c)
console.log(a===c)


/*
For the array a = [1, 2, 3], a.toString() results in the string '1,2,3', which is exactly the value of c.


a == b: false (arrays are compared by reference).
a === b: false (arrays are different objects).
a == c: true (array is converted to string, values match).
a === c: false (different types: array vs string).

*/


async function abc(){
	for(let i=0;i<10;i++){
		console.log(i)
	}
}

/*
The above code executes synchronously because there's no await or asynchronous operation inside the loop.

*/


async function abc() {
    for (let i = 0; i < 10; i++) {
        // Simulating an async operation with a delay
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
        console.log(i);
    }
}

abc();

/*
If you want asynchronous behavior inside the loop, you need to use await with a promise or some asynchronous operation.


*/