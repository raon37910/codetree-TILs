let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, a] = inputs[0].split(' ')
n = Number(n)
let cnt = 0

for(let i = 1; i <= n; i++) {
    if(a === inputs[i]) {
        cnt++
    }
}
console.log(cnt)