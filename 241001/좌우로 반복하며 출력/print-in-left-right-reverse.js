let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    if(i % 2 === 1) {
        let line = ''
        for(let j = 1; j <= n; j++) {
            line += `${j}`
        }
        console.log(line)
    } else {
        let line = ''
        for(let j = n; j >= 1; j--) {
            line += `${j}`
        }
        console.log(line)
    }
}