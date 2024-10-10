let [a, b, c, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

// 음수 일 수 있음
let minDiff = d - b

// hourDif는 음수일 수 없나?
let hourDiff = c - a

// console.log(`h:${hourDiff} m: ${minDiff}`)
console.log(hourDiff * 60 + minDiff)