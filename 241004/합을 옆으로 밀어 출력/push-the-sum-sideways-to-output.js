let inputs = require('fs').readFileSync(0).toString().trim().split('\n').map(x => +x)
inputs = inputs.slice(1)
let sum = inputs.reduce((prev, cur) => prev + cur, 0)
sum = sum.toString()

console.log(sum.slice(1) + sum[0])