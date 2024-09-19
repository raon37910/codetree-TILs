let[a,b,c] = require('fs').readFileSync(0).toString().split('\n').map(x => (+x).toFixed(3))
console.log(a)
console.log(b)
console.log(c)