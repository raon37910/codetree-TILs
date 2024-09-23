let [b, a] = require('fs').readFileSync(0).toString().split(' ')

a = Number(a)
b = Number(b)

let result = ''

for(let i = b; i >= a; i-=2) {
    result += `${i} `
}

console.log(result)