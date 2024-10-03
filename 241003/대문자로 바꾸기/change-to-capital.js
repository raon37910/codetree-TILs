// 소문자 코드에서 -32 하면 대문자 됨
let inputs = require('fs').readFileSync(0).toString().trim().split('\n')

for(let row of inputs) {
    let [elem1, elem2, elem3] = row.split(' ').map(a => String.fromCharCode(a.charCodeAt(0) - 32))
    console.log(`${elem1} ${elem2} ${elem3}`)
}