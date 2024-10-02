let  inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let count = Array(7).fill(0)

for(let input of inputs) {
    count[input]++
}

for(let i = 1; i <= 6; i++) {
    console.log(`${i} - ${count[i]}`)
}