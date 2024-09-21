const fs = require('fs')
let year = Number(fs.readFileSync(0).toString().trim())

// 윤년인 경우의수: 4로 나누어 떨어짐
// 예외처리 100으로 나누어 떨어지는데 400으로 나누어 떨어지지 않으면 평년
if(year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)) {
    console.log('false')
} else {
    console.log('true')
}