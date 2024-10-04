let str = require('fs').readFileSync(0).toString()
let dif = 'A'.charCodeAt() - 'a'.charCodeAt()
let result = ''

for(let c of str) {
    if(c >= 'A' && c <= 'Z') {
             result += c
    } else if(c >= 'a' && c <= 'z') {
        result += String.fromCharCode(c.charCodeAt() + dif)
    } 
}

console.log(result)