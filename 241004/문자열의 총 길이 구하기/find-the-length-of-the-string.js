let strs = require('fs').readFileSync(0).toString().trim().split(' ')
let cnt = 0

for(let str of strs) {
    cnt += str.length
}

console.log(cnt)