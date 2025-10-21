for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 0);    // 0 1 2 3 4       
}

// i is created for each iteration;

let j = 0;
for (j = 0; j < 5; j++) {
    setTimeout(() => console.log(j), 0);    // 5  5 5 5 5
}

for (var k = 0; k < 5; k++) {
    setTimeout(() => console.log(k), 0);
}

// OUTPUT = 5 5 5 5 5

var k;
for (k = 0; k < 5; k++) {
    setTimeout(() => console.log(k), 0);
}

// OUTPUT = 5 5 5 5 5


// above case var is a global scope pehele woh execute krega then console krega
// let is a locally scope for each iterate they dec new variable

/*
because a different i variable is created for each loop iteration with let, whereas there's only one i with var.

The fact the var is hoisted so it's declared outside the loop whereas 
the let is only declared within the loop, which may offer an optimization advantage.

*/

const array = [16, 32, 64, 128];
for (var i = 0; i < array.length; i++) {
   setTimeout(function() {
     console.log('Ind_Val: ' + i + ', elem: ' + array[i]);
   }, 10);
}

// Ind_Val: 4, elem: undefined
// Ind_Val: 4, elem: undefined
// Ind_Val: 4, elem: undefined
// Ind_Val: 4, elem: undefined

