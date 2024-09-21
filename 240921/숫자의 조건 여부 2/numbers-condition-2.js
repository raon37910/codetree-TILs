const fs = require('fs')
let num = fs.readFileSync(0).toString()
num = Number(num)

if(num === 5) {
    console.log('A')
}

if(num % 2 === 0) {
    console.log('B')
}