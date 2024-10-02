let  inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let count = Array(10).fill(0)

for(let input of inputs) {
    if(input < 10) continue
    let num = parseInt(input / 10)
    count[num]++
}

for(let i = 1; i <= 9; i++) {
    console.log(`${i} - ${count[i]}`)
}