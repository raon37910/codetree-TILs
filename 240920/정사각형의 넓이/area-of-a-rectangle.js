let n = require('fs').readFileSync(0).toString().trim()
n = +n
console.log(n * n)
if(n < 5) {
    console.log('tiny')
}