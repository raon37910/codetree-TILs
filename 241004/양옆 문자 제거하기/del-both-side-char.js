let str = require('fs').readFileSync(0).toString().trim()
str = str.slice(0, 1) + str.slice(2)
str = str.slice(0, -2) + str.slice(-1)
console.log(str)