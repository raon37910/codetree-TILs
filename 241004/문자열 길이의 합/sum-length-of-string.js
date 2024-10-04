let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let lengthSum = 0
let cnt = 0

for(let i = 1; i <= n; i++) {
    let str = inputs[i]

    if(str[0] === 'a') {
        cnt++
    }

    lengthSum += str.length
}

console.log(lengthSum, cnt)