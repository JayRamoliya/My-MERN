// video 6
// 🔴 Node.JS Challenge #1_ CRUD Operations using FS Module in NodeJS in Hindi in 2020

// Challenge Time

// C - create
// U - update
// R - read
// D - delete

const fs = require('fs'); // import module from node js

console.log(typeof(fs)); // object

// 1: create a folder named it jay
// fs.mkdirSync("jay")

// 2: create a file in it named bio.txt and data into it.
// fs.writeFileSync('jay/bio.txt','my name is jay')

// 3: add more data into the file at the end of the existing data.
// fs.appendFileSync('jay/bio.txt',' and my age is 20')

// 4: read the data without getting the buffer data at first.
// file encoding 'utf-8'
// const data=fs.readFileSync('jay/bio.txt','utf-8')
// console.log(data);
// console.log(data.toString());

// 5: rename the file name to mybio.txt
// fs.renameSync('jay/bio.txt','jay/mybio.txt')

// 6: now delete both the file and the folder
// fs.unlinkSync('jay/mybio.txt') // file delete

// fs.rmdirSync('jay') //folder delete