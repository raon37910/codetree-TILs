let arr = ["apple", "banana", "grape", "blueberry", "orange"]
let c = require('fs').readFileSync(0).toString().trim()
let cnt = 0

for(let str of arr) {
    if(str[2] === c || str[3] === c) {
        cnt++
        console.log(str)
    }
}
console.log(cnt)