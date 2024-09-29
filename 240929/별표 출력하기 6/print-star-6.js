let n = Number(require('fs').readFileSync(0).toString())

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j < i; j++) {
        line += '  '
    }

    for(let j = 1; j <= 2 * (n - i) + 1; j++) {
        line += '* '
    }
    
    console.log(line)
}

// 공백개수 + 행 번호 = 3

for(let i = 2; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n - i; j++) {
        line += '  '
    }

    for(let j = 1; j <= 2 * i - 1; j++) {
        line += '* '
    }
    
    console.log(line)
}