let [a, b] = require('fs').readFileSync(0).toString().split(' ').map(x=>+x)
let sum = a + b
let avg = (sum / 2).toFixed(1)
console.log(sum ,avg)