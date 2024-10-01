let n = Number(require('fs').readFileSync(0).toString().trim())
let arr = Array.from(Array(n), () => new Array(n))

for(let col = 0; col < n; col++) {
    if(col % 2 === 0) {
        for(let row = 0; row < n; row++) {
            arr[row][col] = row + 1
        }
    } else {
        for(let row = n-1; row >= 0; row--) {
            arr[row][col] = n-row
        }
    }
    
}
// console.log(arr)


for(let i = 0; i < n; i++) {
    let line = ''
    for(let j = 0; j < n; j++) {
        line += arr[i][j]
    }
    console.log(line)
}