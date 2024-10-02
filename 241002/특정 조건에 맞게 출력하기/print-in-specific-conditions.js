let arr = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let result = ''

for(let elem of arr) {
    if(elem === 0) break

    if(elem % 2 === 0) {
        result += `${elem / 2} `
    } else {
        result += `${elem + 3} `
    }
}

console.log(result)