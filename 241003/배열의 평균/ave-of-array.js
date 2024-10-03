let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let arr = []

for(let row of inputs) {
    arr.push(row.split(' ').map(Number))
}

// 가로 평균
let result = ''
for(let i = 0; i < arr.length; i++) {
    let sum = 0
    for(let j = 0; j < arr[0].length; j++) {
        sum += arr[i][j]
    }
    result += `${(sum / arr[0].length).toFixed(1)} `
}
console.log(result)

result = ''
// 세로 평균
for(let i = 0; i < arr[0].length; i++) {
    let sum = 0
    for(let j = 0; j < arr.length; j++) {
        sum += arr[j][i]
    }
    result += `${(sum / arr.length).toFixed(1)} `
}
console.log(result)
// 전체 평균
let sum = 0
let cnt = arr.length * arr[0].length
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[0].length; j++) {
        sum += arr[i][j]
    }
}

console.log((sum / cnt).toFixed(1))