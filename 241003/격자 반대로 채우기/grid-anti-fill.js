let n = Number(require('fs').readFileSync(0).toString().trim())
let arr = Array(n).fill(0).map((_) => Array(n).fill(0))
let num = 1
let flag = true

for(let col = n-1; col >= 0; col--) {
    if(flag) {
        for(let row = n-1; row >= 0; row--) {
            arr[row][col] = num++
        }
        flag = !flag
    } else {
        for(let row = 0; row <= n-1; row++) {
            arr[row][col] = num++
        }
        flag = !flag
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < n; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}