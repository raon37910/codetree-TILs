let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x=>+x)
a += b;
b += a;
console.log(a, b)