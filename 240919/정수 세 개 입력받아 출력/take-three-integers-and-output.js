const fs = require('fs')
let [a, temp] = fs.readFileSync(0).toString().split(' ')
let [b, c] = temp.split('\n')
console.log(a,b,c)