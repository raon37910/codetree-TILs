let n = Number(require('fs').readFileSync(0).toString().trim())

function sum(n) {
    if(n < 10) {
        return n * n
    }
    let mod = n % 10
    return sum(parseInt(n / 10)) + mod * mod
}

console.log(sum(n))