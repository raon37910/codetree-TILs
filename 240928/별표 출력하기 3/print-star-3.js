let n = Number(require('fs').readFileSync(0).toString())

for(let i = 1; i <= n; i++) {
    let temp = ''
    for(let j = 1; j < i; j++) {
        temp += '  '
    }
    // 1 => 2 * n - 1
    // 2 => 2 * (n-1)
    for(let j = 2 * (n-i) + 1; j >= 1; j--) {
        temp += '* '
    }
    console.log(temp)
}