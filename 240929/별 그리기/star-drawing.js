let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n-i; j++) {
        line += ' '
    }
    for(let j = 1; j <= 2 * i - 1 ;j++) {
        line += '*'
    }
    console.log(line)
}


for(let i = 2; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= i-1; j++) {
        line += ' '
    }
    for(let j = 1; j <= 2 * (n - i + 1) - 1 ;j++) {
        line += '*'
    }
    console.log(line)
}