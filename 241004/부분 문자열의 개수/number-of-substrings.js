let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n')
let cnt = 0

for(let i = 0; i <= a.length - b.length; i++) {
    let sub = a.slice(i, i + b.length)
    if(sub === b) {
        cnt++
    }
}

console.log(cnt)