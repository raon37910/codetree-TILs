let n = Number(require('fs').readFileSync(0).toString())
let answer = ''

for(let i = 2; i <= n; i++) {
    let satisfy = true
    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            satisfy = false
            break
        }
    }
    if(satisfy) {
        answer += `${i} `
    }
}

console.log(answer)