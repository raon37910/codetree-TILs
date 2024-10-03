let [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let arr = Array(n).fill(0).map(x => Array(m).fill(0))
let num = 1

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        arr[i][j] = num++
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < m; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}