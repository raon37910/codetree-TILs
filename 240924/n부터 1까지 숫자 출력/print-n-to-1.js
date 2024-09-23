let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

let i = n
let result = ''

while(i >= 1) {
    result += `${i} `
    i--
}

console.log(result)