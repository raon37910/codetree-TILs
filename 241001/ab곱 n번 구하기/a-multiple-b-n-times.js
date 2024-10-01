let input = require('fs').readFileSync(0).toString().split('\n')
let n = Number(input[0])

for(let i = 1; i <= n; i++) {
    let [a, b] = input[i].split(' ').map(x => +x)
    let mul = 1
    for(let j = a; j <= b; j++) {
        mul *= j
    }
    console.log(mul)
}