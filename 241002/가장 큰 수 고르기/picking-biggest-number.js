let arr = require('fs').readFileSync(0).toString().split(' ').map(x => +x)
let max = Number.MIN_SAFE_INTEGER

for(let elem of arr) {
    if(max < elem) {
        max = elem
    }
}

console.log(max)