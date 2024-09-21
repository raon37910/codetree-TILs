// 홀수 31
// 짝수 30
// 2는 28
const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

if(n == 2) {
    console.log(28)
} else if((n < 8 && n % 2 == 1) || (n >= 8 && n % 2 == 0)) {
    console.log(31)
} else if((n < 8 && n % 2 == 0) || (n >= 8 && n % 2 == 1)) {
    console.log(30)
}