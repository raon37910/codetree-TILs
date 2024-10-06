let n = Number(require('fs').readFileSync(0).toString().trim())

function solve(n) {
    if(n <= 1) {
        return 1
    }

    return solve(n-1) * n
}

console.log(solve(n))