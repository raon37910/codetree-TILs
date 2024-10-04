let [a, b] = require('fs').readFileSync(0).toString().split('\n')
let ab = a+b
let ba = b+a

console.log(ab === ba ? 'true' : 'false')