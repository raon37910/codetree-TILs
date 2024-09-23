let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

let answer = ''
let i = 1

while(i <= n) {
    answer += `${i++} `
}

console.log(answer)