let str = require('fs').readFileSync(0).toString().trim()
let diff1 = 'a'.charCodeAt() - 'A'.charCodeAt()
let diff2 = -diff1
let result = ''

for(let c of str) {
    if(c >= 'A' && c <= 'Z') {
        result += String.fromCharCode(c.charCodeAt() + diff1)
    } else if(c >= 'a' && c <= 'z') {
        result += String.fromCharCode(c.charCodeAt() + diff2)
    }
}

console.log(result)