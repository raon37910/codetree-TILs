let inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let arr = []

for(let elem of inputs) {
    if(elem === 0) {
        break
    }
    arr.push(elem)
}

let sum = arr.filter(elem => elem % 2 === 0)
             .reduce((a, b) => a + b, 0)
let cnt = arr.filter(elem => elem % 2 === 0).length

console.log(`${cnt} ${sum}`)