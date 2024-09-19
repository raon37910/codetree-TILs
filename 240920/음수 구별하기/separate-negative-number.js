let n = require('fs').readFileSync(0).toString()
n = Number(n)
console.log(n)
if(n < 0) {
    console.log('minus')
}