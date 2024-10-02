let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
let evens = []

for(let elem of arr) {
    if(elem % 2 === 0) {
        evens.push(elem)
    }
}

let result = ''

for(let elem of evens) {
    result += `${elem} `
}
console.log(result)