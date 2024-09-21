const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().trim().split(' ')

a = Number(a)
b = Number(b)

let answer = ''

if(a < b) {
    answer += '1 '
} else {
    answer += '0 '
}

if (a === b) {
    answer += '1'
} else {
    answer += '0'
}

console.log(answer)