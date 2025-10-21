/*
The “this” keyword refers to the object that the function is a property of.

The value of the “this” keyword will always depend on the object that is invoking the function.\
*/


// function doSomething(){
//     console.log(this);
// }
// doSomething();

/*
Therefore, the output of the above code will be the global object. 
Since we ran the above code inside the browser, the global object is the window object.
*/
var obj = {
    name:"Akshay",
    getName:function(){
        console.log(this.name)
    }
}
obj.getName();
