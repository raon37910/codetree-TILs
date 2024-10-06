let input = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(input[0])
let arr = input[1].split(' ').map(Number)

function findMax(cur) {
    if(cur === 0) {
        return arr[0]
    }

    return Math.max(findMax(cur-1), arr[cur])
}

console.log(findMax(n-1))