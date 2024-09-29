let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)
n = 2 * n + 1

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n;j ++) {
        if(i % 2 === 0 && j % 2 === 0) {
            line += '  '
        } else {
            line += '* '
        }
    }
    console.log(line)
}