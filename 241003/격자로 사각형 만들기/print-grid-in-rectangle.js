let n = Number(require('fs').readFileSync(0).toString())
let arr = Array(n).fill(0).map(_ => Array(n).fill(1))

for(let i = 1; i < n; i++) {
    for(let j = 1; j < n; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1]
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < n; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}