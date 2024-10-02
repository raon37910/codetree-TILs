let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
let result = ''
for(let elem of arr) {
    result += `${elem * elem} `
}
console.log(result)