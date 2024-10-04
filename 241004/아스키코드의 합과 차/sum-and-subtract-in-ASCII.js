let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
let aCode = a.charCodeAt()
let bCode = b.charCodeAt()

console.log(aCode + bCode, Math.abs(aCode -bCode))