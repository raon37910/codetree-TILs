let [n, arr] = require('fs').readFileSync(0).toString().split('\n')
arr = arr.split(' ').map(Number)
// console.log(arr)
let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 2) {
        cnt++
        if(cnt === 3) {
            console.log(i + 1)
            return
        }
    }
}