const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ')

a = Number(a)
b = Number(b)
c = Number(c)

if ((a < b && b < c) || (c < b && b < a)) {
    console.log(b)
} else if ((a < c && c < b) || (b < c && c < a)) {
    console.log(c)
} else {
    console.log(a)
}