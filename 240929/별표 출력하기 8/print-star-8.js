let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

for(let i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        let line = ''
        for(let j = 1; j <= i; j++) {
            line += '* '
        }
        console.log(line)
    } else {
        console.log('*')
    }
}