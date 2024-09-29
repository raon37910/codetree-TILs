let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let line = ''
    // 왼쪽 직각 삼각형 별표
    for(let j = 1; j <= n + 1 - i; j++) {
        line += '*'
    }
    // 왼쪽 직각 삼각형 공백
    for(let j = 1; j < i; j++) {
        line += ' '
    }
    // 오른쪽 직각 삼각형 공백
    for(let j = 1; j < i; j++) {
        line += ' '
    }
    // 오른쪽 직각 삼각형 별표
    for(let j = 1; j <= n + 1 - i; j++) {
        line += '*'
    }
    console.log(line)
}