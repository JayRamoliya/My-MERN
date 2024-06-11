// 10 Node.JS OS Module To Get Operating System Info in Hindi _ Node JS Tutorial #10

const os=require('os');

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.uptime());
// console.log(os.cpus());

const free_memory=os.freemem();
// console.log(free_memory);
// console.log(`${free_memory/1024/1024/1024}`);

const total_memory=os.totalmem();
// console.log(free_memory);
// console.log(`${total_memory/1024/1024/1024}`);

