function contain369(n) {
    let strN = n + ''
    for(let c of strN) {
        if(c === '3' || c === '6' || c ==='9') {
            return true
        }
    }
    return false
}
let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let cnt = 0

for(let i = a; i <= b; i++) {
    if(contain369(i) || i % 3 === 0) {
        cnt++
    }
}
console.log(cnt)