// multiple threads we can create
const {exec,execFile,spawn,fork} = require('child_process');

 // exec() we can execute any script

exec('echo "The home \\ $HOME varibale is $HOME" ' )

exec('" /path/to/test/file/test.sh" args1, agrs2')  // to run a shell script

exec('ls')      // to show list of files



// execFile()   like exec but cannot run without terminal or shell like in windows dot bat and dot cmd cannot run without terminal
// so we can't launched using child process dot execute 

// for that  we use either exec or spawn



// spawn and fork

/*
fork() is a special instance of spawn where it uses a separate v8 engine 
so if we are creating child process using fork() it runs on separate v8 engine 

or if we create or run .js file using spawn() it will be running on the same v8 engine on which main thread is running 
but it will run on different process but on same v8 engine 

*/
fork('node server.js')     // it will create separate v8 engine


spawn('node server.js') // it will be running on same v8 engine on which main thread is running


// differeneces
/*
spawn() is meant for huge amount of data so it returns a stream

but exec() returns a buffer 

fork() 

*/

