
var x = 10;
console.log(x);
function abc(){
    var x=100;
    console.log(x)
}
function xyz(){
    var x =1000;
    console.log(x)
}
abc();
xyz();
// 10 100 1000


var x = 10;
abc();
xyz();
console.log(x);
function abc(){
    var x=100;
    console.log(x)
}
function xyz(){
    var x =1000;
    console.log(x)
}
// 100 1000 10



function a(){
    var x=10;
    function b(){
      console.log(x)
      var x = 20;
      console.log(x)
    }
    b()
  }
  
  a()

// output:- undefined 20


  function a(){
    var x=10;
    function b(){
      console.log(x)
      x = 20;
      console.log(x)
    }
    b()
  }
  
  a()

// output:- 10 20


  function a(){
    var x=10;
    function b(){
      console.log(x)
      var y = 20;
      console.log(y)
    }
    b()
  }
  
  a() 

// output:- 10 20



console.log(x);
console.log(y);
x=10;
y=20;
var x;
let y;
// undefined and error init wali


x=10;
console.log(x);
y=20;
console.log(y);
var x;
let y;
// 10 and error




