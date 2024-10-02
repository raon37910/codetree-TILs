let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

let sumOdd = 0
let sumThree = 0
let cntThree = 0

for(let i = 0; i < arr.length; i++) {
    if((i + 1) % 2 === 0) {
        sumOdd += arr[i]
    } else if ((i + 1) % 3 === 0) {
        sumThree += arr[i]
        cntThree++
        console.log(arr[i])
    }
}
let avg = sumThree / cntThree
console.log(`${sumOdd} ${avg.toFixed(1)}`)