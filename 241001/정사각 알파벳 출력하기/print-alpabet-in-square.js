let n = Number(require('fs').readFileSync(0).toString().trim())
let code = 'A'.charCodeAt(0)

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n; j++) {
        line += String.fromCharCode(code++)
    }
    console.log(line)
}