let [b, a] = require('fs').readFileSync(0).toString().trim().split(' ')

b = Number(b)
a = Number(a)

let i = b
let result = ''

while(i >= a) {
    result += `${i} `
    i-=2
}

console.log(result)