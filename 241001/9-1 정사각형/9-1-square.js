let n = Number(require('fs').readFileSync(0).toString().trim())
let cnt = 9

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <=n; j++) {
        line += `${cnt--}`
        if(cnt <= 0) cnt = 9
    }
    console.log(line)
}