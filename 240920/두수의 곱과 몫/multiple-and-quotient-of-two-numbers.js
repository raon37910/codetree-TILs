let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x=>+x)
console.log(`${a} * ${b} = ${a*b}`)
console.log(`${a} / ${b} = ${parseInt(a/b)}`)