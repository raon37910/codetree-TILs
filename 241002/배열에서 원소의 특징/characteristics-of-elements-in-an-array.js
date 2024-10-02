let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let findIndex = -1

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3 === 0) {
        findIndex = i-1
        break
    }
}

console.log(arr[findIndex])