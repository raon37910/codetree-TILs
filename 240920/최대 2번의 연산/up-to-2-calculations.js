let a = require('fs').readFileSync(0).toString()
a = Number(a)

if(a % 2 === 0) {
    a /= 2
}

if(a % 2 === 1) {
    a += 1
    a /= 2
}

console.log(a)