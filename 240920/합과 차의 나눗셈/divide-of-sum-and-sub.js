let [a,b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x=>+x)
let sum = a + b
let sub = a - b
console.log((sum / sub).toFixed(2))