let [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(x=>+x)
let sum = a + b + c
let avg = parseInt(sum / 3)
console.log(sum)
console.log(avg)