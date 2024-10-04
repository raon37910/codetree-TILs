let str = require('fs').readFileSync(0).toString().trim()
console.log(str.slice(1, str.length) + str[0])