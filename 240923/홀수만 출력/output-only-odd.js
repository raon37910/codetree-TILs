let [a, b] = require('fs').readFileSync(0).toString().split(' ')

a = Number(a)
b = Number(b)

let result = ''

for(let i = a; i <= b; i +=2 ) {
    result += `${i} `
}

console.log(result)