let [n, str] = require('fs').readFileSync(0).toString().trim().split('\n')
let x = str.split(' ').join('')
let result = ''
let cnt = 1

for(let i = 0; i < x.length; i++) {
    result += x[i]
    if(cnt % 5 === 0) {
        result += '\n'
    }
    cnt++
}
console.log(result)