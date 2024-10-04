let codes = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let result = ''

for(let code of codes) {
    result += `${String.fromCharCode(code)} `
}

console.log(result)