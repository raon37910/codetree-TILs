const fs = require('fs')
let [a, sub] = fs.readFileSync(0).toString().trim().split('\n')
let [b, c, d, e] = sub.split(' ')

a = Number(a)
b = Number(b)
c = Number(c)
d = Number(d)
e = Number(e)

console.log(a > b ? 1 : 0)
console.log(a > c ? 1 : 0)
console.log(a > d ? 1 : 0)
console.log(a > e ? 1 : 0)