let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= i; j++) {
        str += '*'
    }
    console.log(str + '\n')
}

for(let i = n-1; i >= 1; i--) {
    let str = ''
    for(let j = 1; j <= i; j++) {
        str += '*'
    }
    console.log(str + '\n')
}