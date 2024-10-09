let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let arr = []

for(let i = 1; i <= n; i++) {
    arr.push(inputs[i])
}

console.log(arr.sort().join('\n'))