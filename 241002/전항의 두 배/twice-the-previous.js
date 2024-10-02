let [p, pp] = require('fs').readFileSync(0).toString().split(' ').map(Number)
let index = 3
let result = `${p} ${pp} `

while(index <= 10) {
    index++
    let next = pp + 2 * p
    p = pp
    pp = next
    result += `${pp} `
}

console.log(result)