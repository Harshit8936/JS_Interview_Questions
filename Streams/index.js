const fs = require('fs');
const express = require('express');
const status = require('express-status-monitor');
const zlib = require('zlib');


const app = express();
const port = 8000;
app.use(status());


app.get('/',(req,res)=>{
    // fs.readFile('file.txt',(err,data)=>{
    //     res.end(data)
    // })
    /*
    first we will create stream
    then send chunk(some part of actual data)
    then end that stream
    */
    const stream = fs.createReadStream('file.txt','utf-8');     
    stream.on('data',(chunk)=>res.write(chunk));        // it will not hold chunk on their place
    stream.on('end',()=>res.end());     // when work get finished
})



// take a file.txt and zip same
// Stream read(file.txt)-->Zipper --> fs write stream
// fs.createReadStream('file.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('file.zip')));

// Pipe does they will connects the output of one stream to the input of another stream

app.listen(port,()=>{
    console.log(`App is listening on ${port}`);
})

/*
The main use of stream is efficincy while to load large files in memory they process data chunk by chunk



*/
// Duplex Stream:- Streams that are both readable and writable e.g.---> zlib stremas for compression/decompression and crypto streams.




