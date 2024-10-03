let input = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, m] = input[0].split(' ').map(Number)
let arr = Array(n+1).fill(0).map(_ => Array(n+1).fill(0))

for(let i = 1; i <= m; i++) {
    let [r, c] = input[i].split(' ').map(Number)
    arr[r][c] = 1
}

for(let i = 1; i <= n; i++) {
    let result = ''
    for(let j = 1; j <= n; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}