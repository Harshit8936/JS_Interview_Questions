const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const path = require('path')
const {Server} = require('socket.io');
const io = new Server(server)       // this will handle our sockets

// handles socket.io
// socket/client basically here i.e. client they keep client info

io.on('connection',(socket)=>{
    // send a message to client
    //io means to all connections
    console.log('A new user is connected',socket.id)
    socket.on('user-message',message=>{
        console.log("A new user message is",message)
        // send messages to all connections (client side)
        io.emit('message',message)
    })
})



app.use(express.static(path.resolve("./public")));

app.get('/',(req,res)=>{
    res.sendFile("./public/index.html")

})

server.listen(9000,(req,res)=>{
    console.log(`server started at PORT:9000`);
})