let str = require('fs').readFileSync(0).toString().trim()
let n = str.length;
console.log(str)

for(let i = 0; i < n; i++) {
    str = str[str.length-1] + str.slice(0, str.length-1)
    console.log(str)
}