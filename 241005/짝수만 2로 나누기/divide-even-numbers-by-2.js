function solution(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            arr[i] /= 2
        }
    }
}
let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
solution(arr)

for(let elem of arr) {
    process.stdout.write(`${elem} `)
}