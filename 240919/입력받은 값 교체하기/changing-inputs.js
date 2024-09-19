const fs = require('fs')
let[a, b] = fs.readFileSync(0).toString().split(' ').map(x => +x);
[a,b ] = [b,a]
console.log(a, b)