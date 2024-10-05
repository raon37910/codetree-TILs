let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, m] = inputs[0].split(' ').map(Number)
let a = inputs[1].split(' ').map(Number)

function getSum(start, end) {
    let sum = 0
    for(let i = start-1; i < end; i++) {
        sum += a[i]
    }
    console.log(sum)
}

for(let i = 2; i <= m + 1; i++) {
    let [start, end] = inputs[i].split(' ').map(Number)
    getSum(start, end)
}