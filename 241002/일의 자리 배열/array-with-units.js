let [a, b] = require('fs').readFileSync(0).toString().split(' ').map(Number)

let p = a
let pp = b
let index = 3
let result = `${a} ${b} `

while(index <= 10) {
    let cur = (p + pp) % 10
    p = pp
    pp = cur
    result += `${cur} `
    index++
}

console.log(result)