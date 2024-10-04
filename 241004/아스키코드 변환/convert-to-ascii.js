let [c, code] = require('fs').readFileSync(0).toString().trim().split(' ')

console.log(c.charCodeAt(), String.fromCharCode(code))