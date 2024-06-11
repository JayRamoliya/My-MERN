// #7_ Node.JS Asynchronous File System Core Modules _ Reading and Writing File Asynchronously in Hindi

const fs = require('fs');

// fs.writeFile(path, data, options, callback)
fs.writeFile('read.txt','jay is good but also smart',(err)=>{
    console.log('file is created');
    // console.log(err);
})

// we pass them a function as an argument - a callback -
// that gets called when that task completes.
// the callback has an argument that tells you ...
// the operation completed successfully.
// now we need to say what to do when fs.writeFile
// has completed (even if it's nothing) ,and start
// checking for errors.

// fs.appendFile(path, data, options, callback)
fs.appendFile('read.txt',' add some data in file',(err)=>{
    console.log('task is ready');
})
    
// fs.readFile(path,options,callback);
fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
})