let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = n; i >= 1; i--) {
    let str = ''
    for(let j = 1; j <= i; j++) {
        str += '* '
    }
    console.log(str)
}

for(let i = 2; i <= n; i++) {
    let str = ''
    for(let j = 1; j <= i; j++) {
        str += '* '
    }
    console.log(str)
}