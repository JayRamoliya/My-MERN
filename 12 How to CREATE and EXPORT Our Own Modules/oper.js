// 12 Node.JS #12_ How to CREATE and EXPORT Our Own Modules in Node JS in Hindi

const add = (a,b) =>{
    return a+b
}
const sub = (a,b) =>{
    return a-b
}
const mul = (a,b) =>{
    return a*b
}

const name="jay"

// module.exports.add=add; // .gamete_chale=function_name
// module.exports.sub=sub;
// module.exports.mul=mul;

module.exports={add,sub,mul,name}

// module.exports=name;