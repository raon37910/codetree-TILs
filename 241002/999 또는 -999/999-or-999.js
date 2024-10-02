let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER
let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 999 || arr[i] === -999) break

    if(max < arr[i]) {
        max = arr[i]
    }

    if(min > arr[i]) {
        min = arr[i]
    }
}
console.log(max, min)