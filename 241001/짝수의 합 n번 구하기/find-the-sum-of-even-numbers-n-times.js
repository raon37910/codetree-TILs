let inputs = require('fs').readFileSync(0).toString().split('\n')
let n = Number(inputs[0])

for(let i = 1; i <= n; i++) {
    let [a, b] = inputs[i].split(' ').map(x => +x)
    let sum = 0
    for(let i = a; i <= b; i++) {
        if(i % 2 === 0) {
            sum += i
        }
    }
    console.log(sum)
}