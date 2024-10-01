let n = Number(require('fs').readFileSync(0).toString().trim())
let cnt = 1

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= i; j++) {
        line += `${cnt++} `
    }
    console.log(line)
}