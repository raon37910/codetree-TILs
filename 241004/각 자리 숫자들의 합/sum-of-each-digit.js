let a = require('fs').readFileSync(0).toString().trim()
let sum = 0

for(let c of a) {
    sum += parseInt(c)
}
console.log(sum)