let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let nums = inputs[1].trim().split(' ').map(Number)
let arr = []

for(let i = 0; i < n; i++) {
    arr.push(nums[i])
    arr.sort((a, b) => a - b)
    if(i % 2 === 0) {
        let mid = parseInt(arr.length / 2)
        process.stdout.write(`${arr[mid]} `)
    }
}