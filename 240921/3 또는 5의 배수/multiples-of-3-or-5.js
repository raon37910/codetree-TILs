const fs = require('fs')
let number = fs.readFileSync(0).toString().trim()
number = Number(number)

let result3, result5;

if(number % 3 === 0) {
    result3 = 'YES'
} else {
    result3 = 'NO'
}

if(number % 5 === 0) {
    result5 = 'YES'
} else {
    result5 = 'NO'
}

console.log(result3)
console.log(result5)