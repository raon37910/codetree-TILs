function isPrime(n) {
    if(n === 1) return false
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false
    }
    return true
}

function check(n) {
    let sum = `${n}`.split('').map(Number).reduce((prev, cur) => prev + cur, 0)
    return isPrime(n) && sum % 2 === 0
}

let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let cnt = 0

for(let i = a; i <= b; i++) {
    if(check(i)) cnt++
}

console.log(cnt)