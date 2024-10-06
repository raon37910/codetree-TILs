function solve(n) {
    if(n === 1) {
        return 2
    }

    if(n === 2) {
        return 4
    }

    return solve(n-1) * solve(n-2) % 100
}

let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)
console.log(solve(n))