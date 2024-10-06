let n = Number(require('fs').readFileSync(0).toString().trim())

function solve(n) {
    if(n <= 2) {
        return n
    }

    return n + solve(n-2)
}

console.log(solve(n))