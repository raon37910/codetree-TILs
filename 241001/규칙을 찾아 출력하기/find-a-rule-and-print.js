let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n; j++) {
        if(i >= 2 && i <= n-1 && j >= i && j <= n-1) {
            line += '  '
        } else {
            line += '* '
        }
    }
    console.log(line)
}