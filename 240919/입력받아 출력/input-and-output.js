const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().split("\n").map(x => +x)
console.log(a, b)