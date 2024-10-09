let str = require('fs').readFileSync(0).toString().trim()
let arr = [...str]
console.log(arr.sort().join(''))