let [n, inputs] = require('fs').readFileSync(0).toString().trim().split('\n')
inputs = inputs.split(' ').map(Number)
let count = Array(10).fill(0)

for(let input of inputs) {
    count[input]++
}

for(let i = 1; i <= 9; i++) {
    console.log(count[i])
}