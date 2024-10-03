let strs = require('fs').readFileSync(0).toString().trim().split('\n')

let minStr = strs[0].length;
let maxStr = strs[0].length;

for(let i = 1; i <= 2; i++) {
    if(maxStr < strs[i].length) {
        maxStr = strs[i].length
    }

    if(minStr > strs[i].length) {
        minStr = strs[i].length
    }
}

console.log(maxStr - minStr)