let strs = require('fs').readFileSync(0).toString().trim().split('\n')
let c = strs[strs.length - 1]
let flag = true

for(let i = 0; i < strs.length - 1; i++) {
    let str = strs[i]
    if(str[str.length - 1] === c) {
        console.log(str)
        flag = false
    }
}

if(flag) {
    console.log('None')
}