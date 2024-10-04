let str = require('fs').readFileSync(0).toString().trim()
let index = str.indexOf('e')
console.log(str.slice(0, index) + str.slice(index + 1))