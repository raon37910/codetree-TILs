let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let arr1 = []
let arr2 = []
let flag = false

for(let row of inputs) {
    if(row === '') {
        flag = true
        continue
    }

    if(flag === false) {
        arr1.push(row.split(' ').map(Number))
    } else {
        arr2.push(row.split(' ').map(Number))
    }
}

for(let i = 0; i < 3; i++) {
    let result = ''
    for(let j = 0; j < 3; j++) {
        result += `${arr1[i][j] * arr2[i][j]} `
    }
    console.log(result)
}