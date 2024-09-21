const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().split(' ')

a = Number(a)
b = Number(b)
c = Number(c)

let max = a

if(max < b) {
    max = b 
}

if(max < c) {
    max = c 
}

console.log(max)