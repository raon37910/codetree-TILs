let [str, n] = require('fs').readFileSync(0).toString().trim().split('\n')
n = Number(n)
let result = ''

for(let i = str.length-1; i > str.length-1-n; i--) {
    result += str[i]
}
console.log(result)