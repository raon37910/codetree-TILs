let n = Number(require('fs').readFileSync(0).toString().trim())
let arr = Array(n).fill(0).map(_ => Array(n).fill(0))
let num = 1


for(let col = 0; col < n; col++) {
    for(let row = 0; row < n; row++) {
        arr[row][col] = num++
    }
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < n; j++) {
        result += `${arr[i][j]} `
    }
    console.log(result)
}