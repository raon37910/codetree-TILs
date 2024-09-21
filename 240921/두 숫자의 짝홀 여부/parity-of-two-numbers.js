const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().trim().split(' ')

if (a % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}

if (b % 2 === 0) {
    console.log('even')
} else {
    console.log('odd')
}