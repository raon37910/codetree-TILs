const fs = require('fs')
const n = Number(fs.readFileSync(0).toString())
const FT = 30.48

console.log((n * FT).toFixed(1))