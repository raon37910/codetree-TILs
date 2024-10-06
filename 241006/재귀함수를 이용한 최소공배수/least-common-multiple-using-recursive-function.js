let input = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)
let ans = 1

function gcd(a, b) {
    if(b === 0) {
        return a
    }

    return gcd(b, a % b)
}

for(let i = 0; i < arr.length; i++) {
    ans = ans * arr[i] / gcd(ans, arr[i])
}

console.log(ans)