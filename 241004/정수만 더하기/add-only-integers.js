let str = require('fs').readFileSync(0).toString().trim()
let sum = 0

for(let c of str) {
    if(c >= '0' && c <= '9') {
        sum += Number(c)
    }
}

console.log(sum)