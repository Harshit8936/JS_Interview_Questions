// scope, scope chain, lexical environment

function a(){
    console.log(b)  // 10
}

var b = 10;     // same o/p with let and const
a();


function a(){
    c();
    var b = 10
    function c(){
        
    }
}
a();
console.log(b)      // b is not defined because we are accessing b variable outside the function


