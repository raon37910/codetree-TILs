let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let strs = inputs.slice(1, inputs.length - 1)
let c = inputs[inputs.length - 1]

let cnt = 0
let sum = 0

for(let str of strs) {
    if(str[0] === c) {
        cnt++
        sum += str.length
    }
}

let avg = (sum / cnt).toFixed(2)
console.log(cnt, avg)