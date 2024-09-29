let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) {
        let line = ''
        for(let j = 1; j <= (i - 1) / 2 + 1; j++) {
            line += '* '
        }
        console.log(line)
    } else {
        let line = ''
        for(let j = 1; j <= n - (i /2) + 1; j++) {
            line += '* '
        }
        console.log(line)
    }
}

for(let i = n; i >= 1; i--) {
    if(i % 2 === 1) {
        let line = ''
        for(let j = 1; j <= (i - 1) / 2 + 1; j++) {
            line += '* '
        }
        console.log(line)
    } else {
        let line = ''
        for(let j = 1; j <= n - (i /2) + 1; j++) {
            line += '* '
        }
        console.log(line)
    }
}