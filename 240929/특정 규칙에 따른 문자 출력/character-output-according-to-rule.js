let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n - i; j++) {
        line += '  '
    }
    for(let j = 1; j <= i; j++) {
        line += '@ '
    }
    console.log(line)
}

for(let i = n - 1; i >= 1; i--) {
    let line = ''
    for(let j = 1; j <= i; j++) {
        line += '@ '
    }
    console.log(line)
}