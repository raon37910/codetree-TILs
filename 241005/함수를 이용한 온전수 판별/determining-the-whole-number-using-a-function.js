function check(n) {
    if(n % 2 === 0) return false
    if(n % 10 === 5) return false
    if(n % 3 === 0 && n % 0 !== 0) return false
    return true
}

let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let cnt = 0

for(let i = a; i <= b; i++) {
    if(check(i)) cnt++
}

console.log(cnt)