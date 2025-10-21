// JSON.parse() is used for parsing data that was received as JSON; it deserializes a JSON string into a JavaScript object.

// JSON.stringify() on the other hand is used to create a JSON string out of an object or array; it serializes a JavaScript object into a JSON string.

// JSON.stringify(obj) - Takes any serializable object and returns the JSON representation as a string.

var ob = {name: 'Satyam', age: 19, college: 'KVPG mirzapur'}

var json = JSON.stringify(ob)
console.log(json)   // take any JS object and convert it into JSON String

const data = JSON.parse(json);
console.log(data)       // take the JSON string and convert into an JS object

//Use JSON.stringify to convert objects to JSON strings.
//Use JSON.parse to convert JSON strings back to JavaScript objects.

// JSON.stringify(obj, replacer, space)

/*
obj	        Required.      The value to convert to a string
replacer	Optional.      Either a function or an array used to transform the result. The replacer is called for each item.
space	    Optional.      Either a String or a Number.

A string to be used as white space (max 10 characters),
or a Number, from 0 to 10, to indicate how many space characters to use as white space.


*/


/*replace the value of "city" to upper case:*/
var obj = { "name":"John", "age":"39", "city":"New York"};
var text = JSON.stringify(obj, function (key, value) {
  if (key == "city") {
    return value.toUpperCase();
  } else {
    return value;
  }
});

var text = JSON.stringify(obj, null, "SPACE");
