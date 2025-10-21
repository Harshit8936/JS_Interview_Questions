const cluster = require('cluster');
const express = require('express');
const rateLimit = require('express-rate-limit')


const os = require('os');
const totalCPUs = os.cpus().length;

// console.log(totalCPUs);
if(cluster.isPrimary){
    // console.log(cluster.isPrimary)
    console.log(`Primary ${process.pid} is running`);
    // fork workers
        for (let i = 0; i < totalCPUs; i++) {
            cluster.fork();         // creating workers
        }
}else{
    const port = 8000;
    const app = express();

    const limiter = rateLimit({
        windowMs: 5*60*1000,           // 5 minutes
        max:3,
        message:"Too many requests from this IP, Pls try after 15 minutes",
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
    // const limiter = rateLimit({
    //     windowMs: 15 * 60 * 1000,
    //     max: 100,
    //     handler: (req, res) => {
    //       res.status(429).json({ error: 'Too many requests, please try again later.' });
    //     },
    //   });
    
    // Apply the rate limiter to all requests Globally (for all routes):

    app.use(limiter);
    //app.use('/api/', limiter); // Apply rate limiting to routes starting with '/api/'

    app.get('/',(req,res)=>{
        res.send({message:`Hello world from clusters ${process.pid}`});
    })
    
    app.listen(port,()=>{
        console.log(`App is listenning on ${port} with ${process.pid}`);
    })
}


// On Windows, it is not yet possible to set up a named pipe server in a worker.
// By default, Node.js's cluster module uses a round-robin approach to load balancing.