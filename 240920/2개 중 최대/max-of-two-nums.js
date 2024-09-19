let [a, b] = require('fs').readFileSync(0).toString().split(' ').map(x=>+x)
console.log(a > b ? a : b)