let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let sumOfOdd = 0
let sumOfEven = 0

for(let i = 0; i < arr.length; i++) {
    if((i + 1) % 2 === 0) {
        sumOfEven += arr[i]
    } else {
        sumOfOdd += arr[i]
    }
}

console.log(sumOfEven >= sumOfOdd ? sumOfEven - sumOfOdd : sumOfOdd - sumOfEven)