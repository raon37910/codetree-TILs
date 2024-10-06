let n = Number(require('fs').readFileSync(0).toString().trim())

function solve(n) {
    if(n === 1) {
        return 0
    }

    if(n % 2 === 0) {
        return 1 + solve(n / 2)
    } else {
        return 1 + solve(3 * n + 1)
    }
}

console.log(solve(n))