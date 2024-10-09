let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let A = inputs[1].split(' ').map(Number)
let B = inputs[2].split(' ').map(Number)

A.sort((a, b) => a - b)
B.sort((a, b) => a - b)

let answer = true

for(let i = 0; i < n; i++) {
    if(A[i] !== B[i]) {
        answer = false
        break
    }
}

console.log(answer ? 'Yes': 'No')