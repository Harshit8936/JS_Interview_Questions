let x = {
    f:"Tom",
    l:"John"
}

let y = x;
y.f = "karan";
console.log(x);

// ---------due to shallow copy---------------------------------

var count = [1,,,3,4,,5]            
console.log(count);
// [ 1, <2 empty items>, 3, 4, <1 empty item>, 5 ]



// -----------------------------------------

// function x(){
//     return "hello"
// }
// const sent = x `hi`;   // error throw x has been already declared
// console.log(sent);

//------------------------------------------
const clothes = ['Shirt','Jacket'];
clothes.length = 0;
console.log(clothes[0]);
// undefined

// const clothes = Object.freeze(['Shirt','Jacket']);


