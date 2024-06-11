// 11 📁 PATH Module In Node.JS in Hindi in 2020 _ Node JS Tutorial #11

const path=require('path');
// Return the directory name of a path
// path.dirname(add full path)

// Return the extension of the path
// path.extname(add full path)

// Return the last portion of a path
// path.basename(add full path)

// path.parse(add full path)

// Return the directory name of a path
console.log(path.dirname('C:/Users/Jay Ramoliya/OneDrive/Desktop/NODE JS/fsasync/path.js'));

// Return the extension of the path, from the last '.' to end of string in the last portion of the path. 
console.log(path.extname('C:/Users/Jay Ramoliya/OneDrive/Desktop/NODE JS/fsasync/path.js'));

// Return the last portion of a path
console.log(path.basename('C:/Users/Jay Ramoliya/OneDrive/Desktop/NODE JS/fsasync/path.js'));

// Returns an object from a path string - the opposite of format().
console.log(path.parse('C:/Users/Jay Ramoliya/OneDrive/Desktop/NODE JS/fsasync/path.js'));

const mypath=path.parse('C:/Users/Jay Ramoliya/OneDrive/Desktop/NODE JS/fsasync/path.js');

console.log(mypath.name);
// console.log(mypath.base);
// console.log(mypath.dir);
// console.log(mypath.ext);
// console.log(mypath.root);