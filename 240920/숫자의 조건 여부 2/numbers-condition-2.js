let a = require('fs').readFileSync(0).toString()
a = Number(a)

if(a === 5) {
    console.log('A')
}

if(a % 2 === 0) {
    console.log('B')
}