let char = require('fs').readFileSync(0).toString().trim()
let result = ''

for(let i = 0; i < 8; i++) {
    result += char
}

console.log(result)