let n = Number(require('fs').readFileSync(0).toString().trim())
let cnt = 0;

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n; j++) {
        if(i % 2 === 0) {
            cnt += 2
            line += `${cnt} `
        } else {
            cnt++
            line += `${cnt} `
        }
    }
    console.log(line)
}