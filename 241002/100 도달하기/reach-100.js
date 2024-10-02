let n = Number(require('fs').readFileSync(0).toString())
let p = 1
let pp = n
let result = `${p} ${pp} `

while(pp < 100) {
    let next = p + pp
    p = pp
    pp = next
    result += `${pp} `
}

console.log(result)