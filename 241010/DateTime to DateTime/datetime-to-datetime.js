// 11월 11일 0시 0분을 0으로 친다.
let [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
a -= 11

const temp = 60 * 11 + 11 // 11시 11분까지 분
const sum = (a * 24 * 60) + b * 60 + c
let ans = sum - temp

console.log(ans < 0 ? -1 : ans)