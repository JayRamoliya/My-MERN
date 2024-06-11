// 🔴 #5_ Mastering the Node.js Core Modules _ File System Node.js Module in Hindi in 2020

// Consider modules to be the same as js libraries. 
// a set of function you want to include in your application.

// Node.js has a set of built-in modules which you can use without any further installation.
    
// CORE FS MODULE READ WRITE
// Create files
// Read files
// Update files
// Rename files
// Delete files

const fs = require('fs');

// creating a new file
// fs.writeFileSync('read.txt','jay is good boy')
// overwrite this command line
// fs.writeFileSync('read.txt','jay is good boy and smart boy')

// append data on file
// fs.appendFileSync('read.txt',' jay is brother of sneh')

// read file
const data = fs.readFileSync('read.txt')
// console.log(data); // to give buffer data

new_data=data.toString();
console.log(new_data);

// Node.js includes an additional data type called buffer
// (not available in browser's js)
// buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

// to rename the file
fs.renameSync('read.txt','jay.txt')

// const name="jay"
// console.log(name);

// nodejs.org -> File system

