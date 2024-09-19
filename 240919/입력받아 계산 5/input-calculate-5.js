const fs = require('fs')
console.log(
    fs.readFileSync(0).toString().split(" ")
    .map(x => +x)
    .reduce((a, b) => a + b, 0)
)