const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ')

a = Number(a)
b = Number(b)
c = Number(c)

let resultA, resultB
resultA = (a <= b && a <= c) ? 1 : 0
resultB = (a === b && b === c) ? 1 : 0

console.log(resultA, resultB)