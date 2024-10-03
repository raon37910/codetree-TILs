let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let arr1 = []
let arr2 = []
let [n, m] = inputs[0].split(' ').map(Number)

for(let i = 1; i <= n; i++) {
    arr1.push(inputs[i].split(' ').map(Number))
}

for(let i = n+1; i <= 2*n; i++) {
    arr2.push(inputs[i].split(' ').map(Number))
}

for(let i = 0; i < n; i++) {
    let result = ''
    for(let j = 0; j < m; j++) {
        result += `${arr1[i][j] === arr2[i][j] ? 0 : 1} `
    }
    console.log(result)
}