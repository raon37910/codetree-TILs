let [n, m] = require('fs').readFileSync(0).toString().split(' ').map(Number)
let max = n + m - 2
let num = 1
let arr = Array(n).fill(0).map((_) => Array(m).fill(0))

for(let k = 0; k <= max; k++) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if((i + j) === k) {
                arr[i][j] = num
                num++
            }
        }
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < m; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}