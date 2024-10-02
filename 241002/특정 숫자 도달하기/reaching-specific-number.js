let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let sum = 0
let cnt = 0

for(let score of arr) {
    if(score >= 250) {
        break
    }
    sum += score
    cnt++
}

console.log(`${sum} ${(sum / cnt).toFixed(1)}`)