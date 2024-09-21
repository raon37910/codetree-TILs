const fs = require('fs')
let a = Number(fs.readFileSync(0).toString().trim())

console.log((10 <= a && a <= 20) ? 'yes' : 'no')