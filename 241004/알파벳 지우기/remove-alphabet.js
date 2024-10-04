let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n')

let firstNum = ''

for(let i = 0; i < a.length; i++) {
    if(a[i] >= '0' && a[i] <= '9') {
        firstNum += a[i]
    }
}

let secondNum = ''

for(let i = 0; i < b.length; i++) {
    if(b[i] >= '0' && b[i] <= '9') {
        secondNum += b[i]
    }
}

console.log(Number(firstNum) + Number(secondNum))