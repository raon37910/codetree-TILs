let str = require('fs').readFileSync(0).toString().trim()
let result = ''
for(let i = str.length - 1; i >= 0; i--) {
    if(i % 2 === 1) {
        result += str[i]
    }
}

console.log(result)