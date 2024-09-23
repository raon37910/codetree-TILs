let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
a = Number(a)
b = Number(b)

let result = ''

while(a <= b) {
    result += `${a} `
    if(a % 2 == 1) {
        a *= 2
    } else {
        a += 3
    }
}

console.log(result)