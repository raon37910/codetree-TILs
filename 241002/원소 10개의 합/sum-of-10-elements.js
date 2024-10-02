let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let sum = arr.reduce((a, b) => a + b , 0)
console.log(sum)