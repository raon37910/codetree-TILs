let strs = require('fs').readFileSync(0).toString().trim().split(' ').reverse().join('\n')
console.log(strs)