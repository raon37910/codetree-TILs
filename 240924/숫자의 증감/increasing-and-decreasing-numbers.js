let [c, n] = require('fs').readFileSync(0).toString().split(' ')
let result = ''
n = Number(n)

if(c == 'A') {
    for(let i = 1; i <= n; i++) {
        result += `${i} `
    }
} else if(c == 'D') {
    for(let i = n; i >= 1; i--) {
        result += `${i} `
    }
}

console.log(result)