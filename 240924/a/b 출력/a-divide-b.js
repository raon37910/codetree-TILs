let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
let result = ''

a = Number(a)
b = Number(b)

// console.log(Math.floor(a/b))

if(Math.floor(a/b) === 0) {
    result = '0.'
    a *= 10
} else {
    result = `${Math.floor(a/b)}.`
    a %= b
    a *= 10
}

for(let i = 1; i <= 20; i++) {
    if(Math.floor(a/b) === 0) {
        a *= 10
        result += '0'
    } else {
        result += `${Math.floor(a/b)}`
        a %= b
        a *= 10
    }   
}

console.log(result)