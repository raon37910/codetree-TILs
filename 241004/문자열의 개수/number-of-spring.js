let strs = require('fs').readFileSync(0).toString().trim().split('\n')
let arr = []

for(let str of strs) {
    if(str === '0') break
    arr.push(str)
}
console.log(arr.length)
for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
        console.log(arr[i])
    }
}