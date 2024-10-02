let inputs = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let arr = []

for(let elem of inputs) {
    if(elem === 0) {
        break
    }
    arr.push(elem)
}

let sum = arr.reduce((a, b) => a + b, 0)
let avg = (sum / arr.length).toFixed(1)

console.log(`${sum} ${avg}`)