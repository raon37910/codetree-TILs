let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

let result = ''

for(let i = n; i <= n*5; i+=n) {
    result += `${i} `
}

console.log(result)