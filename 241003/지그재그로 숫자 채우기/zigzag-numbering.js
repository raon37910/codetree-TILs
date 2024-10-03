let [n, m] = require('fs').readFileSync(0).toString().split(' ').map(Number)
let arr = Array(n).fill(0).map(_ => Array(m).fill(0))
let num = 0

for(let col = 0; col < m; col++) {
    if(col % 2 === 0) {
        for(let row = 0; row < n; row++) {
            arr[row][col] = num++
        }
    } else {
        for(let row = n-1; row >= 0; row--) {
            arr[row][col] = num++
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