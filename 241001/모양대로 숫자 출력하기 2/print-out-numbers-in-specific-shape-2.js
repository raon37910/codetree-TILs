let n = Number(require('fs').readFileSync(0).toString())

let cnt = 2

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n; j++) {
        line += `${cnt} `
        cnt += 2
        if(cnt >= 10) cnt = 2
    }
    console.log(line)
}