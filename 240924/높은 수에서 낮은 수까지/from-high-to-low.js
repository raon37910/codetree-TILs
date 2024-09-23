let [a, b] = require('fs').readFileSync(0).toString().split(' ')
let result = ''
a = Number(a)
b = Number(b)

if(a > b) {
    for(let i = a; i >= b; i--) {
        result += `${i} `
    }
} else {
    for(let i = b; i >= a; i--) {
        result += `${i} `
    }
}

console.log(result)