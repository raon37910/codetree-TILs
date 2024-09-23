let n = require('fs').readFileSync(0).toString()

n = Number(n)

let result = ''

for(let i = n; i >= 1; i--) {
    result += `${i} `
}

console.log(result)