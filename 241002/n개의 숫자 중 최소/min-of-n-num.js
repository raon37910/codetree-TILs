let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let min = Number.MAX_SAFE_INTEGER

for(let elem of arr) {
    if(min > elem) {
        min = elem
    }
}

let cnt = 0
for(let elem of arr) {
    if(elem === min) {
        cnt++
    }
}

console.log(min, arr.filter(x => x === min).length)