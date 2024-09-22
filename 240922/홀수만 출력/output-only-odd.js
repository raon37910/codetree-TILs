const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split(' ')

a = Number(a)
b = Number(b)

let answer = ''

for(let i = a; i <= b; i+=2) {
    answer += `${i} `
}

console.log(answer)