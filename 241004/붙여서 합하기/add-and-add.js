let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
let ab = a + b
let ba = b + a
console.log(Number(ab) + Number(ba))