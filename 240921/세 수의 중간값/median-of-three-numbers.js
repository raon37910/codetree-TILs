const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ')

a = Number(a)
b = Number(b)
c = Number(c)

console.log((b > a && b < c) ? 1 : 0)