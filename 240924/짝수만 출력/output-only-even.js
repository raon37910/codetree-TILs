let [a, b] = require('fs').readFileSync(0).toString().split(' ')
a = Number(a)
b = Number(b)

let i = a
let result = ''

while(i <= b) {
    if(i % 2 === 0) {
        result += `${i} `
    }
    i+=2
}

console.log(result)