let str = require('fs').readFileSync(0).toString().trim().split('')
let c1 = str[0]
let c2 = str[1]

for(let i = 0; i < str.length; i++) {
    if(str[i] === c1) {
        str[i] = c2
    } else if(str[i] === c2) {
        str[i] = c1
    } 
}

console.log(str.join(''))