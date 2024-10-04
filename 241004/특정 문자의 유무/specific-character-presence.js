let str = require('fs').readFileSync(0).toString().trim()
let ans1 = str.includes('ee') ? 'Yes' : 'No'
let ans2 = str.includes('ab') ? 'Yes' : 'No'

console.log(ans1, ans2)