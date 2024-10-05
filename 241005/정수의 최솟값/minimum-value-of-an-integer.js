function getMin(a, b, c) {
    let min = a
    min = Math.min(b, min)
    min = Math.min(c, min)
    return min
}

let [a, b, c] = require('fs').readFileSync(0).toString().split(' ').map(Number)
console.log(getMin(a, b, c))