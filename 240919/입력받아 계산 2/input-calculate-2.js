const fs = require('fs')
console.log(
    fs.readFileSync(0).toString().split(" ")
    .map(x => Number(x))
    .reduce((a, b) => a * b, 1)
)