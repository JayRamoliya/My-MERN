// 🔴 #1_ Introduction to Node JS in Hindi _ Node.JS Tutorial for Beginners in Hindi

// Node.js is a js runtime built on chrome's V8 js engine.
// Node.js is a js running on the server.
// Node.js is not a fremework.


const fs=require('fs')
// Reading file using readFileSync() method of 'fs' module

fs.writeFileSync('first.txt','my first file in node.js and also update one')

// fs.writeFileSync() is a synchronous method
// fs.writeFileSync( file, data, options )

