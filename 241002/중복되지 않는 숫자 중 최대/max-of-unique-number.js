let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(x => +x)
let numbers = Array(1001).fill(0)

for(let elem of arr) {
    numbers[elem]++
}

let maxValue= Number.MIN_SAFE_INTEGER

for(let elem of arr) {
    if(numbers[elem] >= 2) continue
    if(maxValue < elem) {
        maxValue = elem
    }
}

console.log(maxValue === Number.MIN_SAFE_INTEGER ? -1 : maxValue)