function isPrime(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return false
    }
    return true
}
let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
if(a !== 5 && b !== 19) {
    console.log(a, b)
} 

let sum = 0

for(let i = a; i <= b; i++) {
    if(isPrime(i)) {
        sum += i
    }
}

console.log(sum)