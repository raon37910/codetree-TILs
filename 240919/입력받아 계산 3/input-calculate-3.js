const fs = require('fs')
console.log(fs.readFileSync(0).toString().split("\n").map(x => +x))