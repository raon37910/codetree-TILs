let inputs = require('fs').readFileSync(0).toString().split('\n')
let [n1, n2] = inputs[0].split(' ').map(x => +x)

if(n1 < n2) {
    console.log('No')
    return
}

let a = inputs[1].split(' ').map(x => +x)
let b = inputs[2].split(' ').map(x => +x)
let satisfy = false

for(let i = 0; i < a.length - b.length + 1; i++) {
    if(satisfy) break
    let temp = a.slice(i, i + b.length)
    let check = true

    for(let i = 0; i < n2; i++) {
        if(temp[i] !== b[i]) {
            check = false
            break
        }
    }
    if(check) satisfy = true
}

console.log(satisfy ? 'Yes': 'No')