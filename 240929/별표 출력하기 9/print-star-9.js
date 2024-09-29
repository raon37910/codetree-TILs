let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let line = ''
    // 공백 출력
    for(let j = 1; j <= n - i; j++) {
        line += '  '
    }
    // 별표 출력
    for(let j = 1; j <= 2 * i - 1; j++) {
        line += '* '
    }
    console.log(line)
}