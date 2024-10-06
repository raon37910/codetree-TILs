let n = Number(require('fs').readFileSync(0).toString().trim())

function solve(n) {
    if (n === 1) {
        return 1
    }

    if(n === 2) {
        return 2
    }

    return solve(parseInt(n / 3)) + solve(n-1)
}

console.log(solve(n))