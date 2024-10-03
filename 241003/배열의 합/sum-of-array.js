let inputs = require('fs').readFileSync(0).toString().trim().split('\n')

for(let row of inputs) {
    let sum = row.split(' ').map(Number).reduce((prev, cur) => prev + cur, 0)
    console.log(sum)
}