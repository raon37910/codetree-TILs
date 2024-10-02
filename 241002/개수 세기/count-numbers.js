let [first, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, m] = first.split(' ').map(x => +x)
arr = arr.split(' ').map(Number)
let cnt = 0

for(let elem of arr) {
    if(elem === m) cnt++
}

console.log(cnt)