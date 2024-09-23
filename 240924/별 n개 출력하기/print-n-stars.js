let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

let i = 1

while(i <= n) {
    console.log('*')
    i++
}