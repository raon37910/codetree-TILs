let n = Number(require('fs').readFileSync(0).toString())
let arr = Array(15).fill(0).map(_ => Array(15).fill(1))

for(let i = 2; i < n; i++) {
    for(let j = 1; j < i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j <= i; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}