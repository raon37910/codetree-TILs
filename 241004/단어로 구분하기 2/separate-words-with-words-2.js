let strs = require('fs').readFileSync(0).toString().split(' ')

for(let i = 0 ; i < strs.length; i++) {
    if(i % 2 === 0) {
        console.log(strs[i])
    }
}