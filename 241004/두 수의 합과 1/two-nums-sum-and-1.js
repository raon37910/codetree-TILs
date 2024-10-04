let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let sum = a + b
sum = sum.toString()
let cnt = 0

for(let c of sum) {
    if(c === '1') {
        cnt++
    }
}

console.log(cnt)