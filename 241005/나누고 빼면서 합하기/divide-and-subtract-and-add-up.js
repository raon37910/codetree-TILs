let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, m] = inputs[0].split(' ').map(Number)
let a = inputs[1].split(' ').map(Number)
let sum = 0
sum += a[m-1]

while(true) {
    if(m % 2 === 0) {
        m /= 2
    } else {
        m -= 1
    }
    sum += a[m-1]
    if(m === 1) break
}

console.log(sum)