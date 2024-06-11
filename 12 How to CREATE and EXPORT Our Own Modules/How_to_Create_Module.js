// 12 Node.JS #12_ How to CREATE and EXPORT Our Own Modules in Node JS in Hindi

const {add,sub,mul,name} = require('./oper')
console.log(add(5,5));
console.log(sub(10,5));
console.log(mul(10,5));


// const oper = require('./oper')
// console.log(oper);
// console.log(oper.add(5,5));
// console.log(oper.sub(10,5));

console.log(name);