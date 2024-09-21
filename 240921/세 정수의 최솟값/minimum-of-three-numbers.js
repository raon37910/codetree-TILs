const fs = require('fs')
let [a, b, c] = fs.readFileSync(0).toString().trim().split(' ')
let min = a;

if(min > b) {
    min = b;
}

if(min > c) {
    min = c;
}

console.log(min)