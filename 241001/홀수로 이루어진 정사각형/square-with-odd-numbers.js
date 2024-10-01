let n = Number(require('fs').readFileSync(0).toString())
let start = 11

for(let i = 1; i <= n; i++) {
    let line = ''
    let rowStart = start + 2 * (i-1)
    for(let j = 1; j <= n; j++) {
        line += `${rowStart + 2 *(j -1)} `
    }
    console.log(line)
}