function a(){
    var x=20;
    function b(){
        var y=10;
        console.log(x)
         function c(){
            console.log(x+y)
       }
       c()
    }
    b()
}

a()


// function b is closure which has its own local memory with lexical info(its' parent info means also keep referenece of parent)

// closure is a function which binds together with its lexical info(parent info) 
// and also have access to change the value of parent info but parent can not do same.

// function main(){
//     const name="Harshit";
//     function sayName(){
//         console.log(name)
//     }
//     return sayName;
// }

// const consoleName = main()
// consoleName()
// function sayname is a closure which has its own local memory with lexical info(parent's info) 


// USE CASE EXAMPLES

