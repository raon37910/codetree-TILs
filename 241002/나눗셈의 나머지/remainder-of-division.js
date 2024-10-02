let [a, b] = require('fs').readFileSync(0).toString().split(' ').map(Number)
let answer = 0
let cnts = Array(11).fill(0)

while(a > 1) {
    let mod = a % b
    a = parseInt(a / b)
    cnts[mod]++
}

console.log(cnts.filter(elem => elem !== 0).reduce((prev, cur) => prev + cur * cur))