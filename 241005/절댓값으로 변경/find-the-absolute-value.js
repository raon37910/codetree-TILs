function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Math.abs(arr[i])
    }
}

let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
solution(arr)

for(let i = 0; i < arr.length; i++) {
    process.stdout.write(`${arr[i]} `)
}