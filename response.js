const express = require('express');
const app = express();
const fs = require('fs')

/***********/
/* .send() */
/***********/

// LOGS MIDDLEWARES

app.use((req,res,next)=>{
  fs.appendFile("log.txt",`\n${Date.now()} ${req.ip} ${req.method} ${req.path}\n`,()=>{
    next()
  })
})

// Text -> text/html
app.get('/send/text',(req, res) => {
  res.send('hello world');
});

// HTML -> text/html
app.get('/send/html',(req, res) => {
  res.send('<h1>hello world</h1>');
});

// JSON -> application/json
app.get('/send/json',(req, res) => {
  res.send({hello: 'world'});
});

/*
Parameter: The body parameter takes a single argument that describes the body that is to be sent in the response.

Content Type: The Express sets the content type of the parameter according to the type of the body parameter.

String & HTML – “text/html”
Buffer – “application/octet-stream”
Array & object – “application/json”

*/
// 1. res.send() will check the structure of your output and set header information accordingly.
// 

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get('/json/json',(req, res) => {
  res.json({hello: 'world'});
})
// HTML -> application/json
app.get('/json/html',(req, res) => {
  res.json('<h1>hello world</h1>');
})

/*
Parameter: The body parameter takes JavaScript Object as its argument.

Content Type: Its content-type is set to – “application/json”.


*/

/***********/
/* .end() */
/***********/

/*
res.end() will NOT set this header attribute

The ETag HTTP response header is an identifier for a specific version of a resource. 
It allows caches to be more efficient, and saves bandwidth, 
as a web server does not need to send a full response if the content has not changed.



*/


// Text --> No `Content-Type`
app.get('/end/text',(req, res) => {
  res.end('hello world');
});

// HTML --> No `Content-Type`
app.get('/end/html',(req, res) => {
  res.end('<p>hello world</p>');
});

// JSON --> text/html
app.get('/end/json',(req, res) => {
  res.end({hello: 'world'});
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}.`)
})
/*
res.send()	                                            res.json()
it is versatile, used for various response types.	    It is specifically designed for sending JSON responses.
It handles plain text, HTML, and other types.	        it converts JavaScript objects/arrays to JSON format.
It automatically set based on provided data 
content type will also set automatically according to the data..	It automatically set to application/json.
Example : javascript res.send('Text response');	Example: javascript res.json({ key: 'value' });


*/


// CUSTOM/BUILTIN headers

app.get('/test',(req,res)=>{
  console.log(req.headers)        // to get req headers
  res.setHeader("X-Myname","Harshit")   // always use X- in custom headers
  res.json({hello:"Hello"})
})


/*
response.send(msg) is equal to response.write(msg);response.end();

Which means, send can only be called once, write can be called many times, but you must call end yourself.


*/