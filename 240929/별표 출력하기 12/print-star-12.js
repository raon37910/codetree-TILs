let n = Number(require('fs').readFileSync(0).toString())

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n; j++) {
        if(j % 2 === 0) {
            if(j <= i) {
                line += '* '
            } else {
                line += '  '
            }
        } else {
            if(i === 1) {
                line += '* '
            } else {
                line += '  '
            }
        }
    }
    console.log(line)
}