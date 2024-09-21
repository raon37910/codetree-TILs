const fs = require('fs')
let [A, B] = fs.readFileSync(0).toString().trim().split('\n')
let [aMath, aEng] = A.split(' ')
let [bMath, bEng] = B.split(' ')

aMath = Number(aMath)
aEng = Number(aEng)
bMath = Number(bMath)
bEng = Number(bEng)

console.log((aMath > bMath && aEng > bEng) ? 1 : 0)