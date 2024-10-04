let [str, c] = require('fs').readFileSync(0).toString().trim().split(' ')
console.log(str.indexOf(c) >= 0 ? str.indexOf(c) : 'No')