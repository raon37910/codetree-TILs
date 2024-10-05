function pow(a, b) {
    let result = 1
    for(let i = 1; i <= b; i++) {
        result *= a
    }
    return result
}
let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
console.log(pow(a, b))