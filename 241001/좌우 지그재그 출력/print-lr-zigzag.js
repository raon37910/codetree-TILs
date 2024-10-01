let  n = Number(require('fs').readFileSync(0).toString().trim())
let cur = 1

for(let i = 1; i <= n; i++) {
    let line = ''
    if(i % 2 === 1) {
        if(i === 1) {
            for(let j = 1; j <= n; j++) {
                line += `${j} `
            }
        } else {
            cur = (i-1) * n 
            for(let j = 1; j <= n; j++) {
                line += `${cur + j} `
            }
        }
    } else {
        cur = i * n
        for(let j = 0; j < n; j++) {
            line += `${cur - j} `
        }
    }
    console.log(line)
}