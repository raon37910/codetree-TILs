let n = Number(require('fs').readFileSync(0).toString().trim())

function solve(num) {
    if(num === 1) {
        return 0
    }

    if(num % 2 === 0) {
        return 1 + solve(num / 2)
    } else {
        return 1 + solve(parseInt(num / 3))
    }
}

console.log(solve(n))