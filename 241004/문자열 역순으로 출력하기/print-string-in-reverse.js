let strs = require('fs').readFileSync(0).toString().trim().split('\n')
for(let i = strs.length - 1; i >= 0; i--) {
    console.log(strs[i])
}