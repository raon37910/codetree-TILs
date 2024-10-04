let str = require('fs').readFileSync(0).toString()
let dif = 'a'.charCodeAt() - 'A'.charCodeAt()
let result = ''

for(let c of str) {
    if(c >= 'A' && c <= 'Z') {
        result += String.fromCharCode(c.charCodeAt() + dif)
    } else if(c >= 'a' && c <= 'z') {
        result += c
    } else if(c >= '0' && c <= '9') {
        result += c
    }
}

console.log(result)