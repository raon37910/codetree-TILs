let inputs = require('fs').readFileSync(0).toString().trim().split('\n').map(x => +x)
let m = inputs[0]

for(let i = 1; i <= m; i++) {
    let n = inputs[i]
    let cnt = 0
    while(n !== 1) {
        if(n % 2 === 0) {
            n /= 2
        } else {
            n = n * 3 + 1
        }
        cnt++
    }
    console.log(cnt)
}