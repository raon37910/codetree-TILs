let strs = require('fs').readFileSync(0).toString().trim().split('\n')

for(let str of strs) {
    if(str === 'END') {
        break
    }
    console.log(str.split('').reverse().join(''))
}