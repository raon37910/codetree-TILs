let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let zeroIndex = -1

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        zeroIndex = i
        break
    }
}

console.log(arr[zeroIndex-3] + arr[zeroIndex - 2] + arr[zeroIndex - 1])