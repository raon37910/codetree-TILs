let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let arr = inputs[1].split(' ').map(Number)

const printArr = (arr) => {
    for(let elem of arr) {
        process.stdout.write(`${elem} `)
    }
    console.log()
}

printArr(arr.sort((a, b) => a - b))
printArr(arr.sort((a, b) => b - a))