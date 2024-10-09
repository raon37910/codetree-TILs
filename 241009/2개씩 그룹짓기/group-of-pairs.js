let input = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b)

let max = Number.MIN_SAFE_INTEGER

for(let i = 0, j = 2*n-1; i < n; i++, j--) {
    if(max < arr[i] + arr[j]) {
        max = arr[i] + arr[j]
    }
}

console.log(max)