let [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

function solve(n) {
    if(n < 10) {
        return n
    }

    return (n % 10) + solve(parseInt(n/10))
}

console.log(solve(a * b * c))