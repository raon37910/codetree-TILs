let [start, end] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let cnt = 0

for(let i = start; i <= end; i++) {
    let divideCount = 0
    for (let j = 1; j <= i; j++) {
        if(i % j === 0) {
            divideCount++
        }
    }
    if(divideCount === 3) {
        cnt++
    }
}

console.log(cnt)