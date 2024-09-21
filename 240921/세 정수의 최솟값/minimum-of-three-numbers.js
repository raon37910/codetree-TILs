const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ')

a = Number(a)
b = Number(b)
c = Number(c)

let min = a;

if(min > b) {
    min = b;
}

if(min > c) {
    min = c;
}

console.log(min)