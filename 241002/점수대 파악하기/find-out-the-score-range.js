let  inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let count = Array(11).fill(0)

for(let input of inputs) {
    if(input === 0) break
    let num = parseInt(input / 10)
    count[num]++
}

for(let i = 10; i >= 1; i--) {
    console.log(`${i}0 - ${count[i]}`)
}