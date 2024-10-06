function solve(n) {
    if(n === 1 || n === 2) {
        return 1
    }

    return solve(n-1) + solve(n-2)
}

let n = Number(require('fs').readFileSync(0).toString().trim())
console.log(solve(n))