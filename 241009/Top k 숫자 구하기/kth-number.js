let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, k] = inputs[0].split(' ').map(Number)
let numbers = inputs[1].split(' ').map(Number)

console.log(numbers.sort((a, b) => a - b)[k-1])