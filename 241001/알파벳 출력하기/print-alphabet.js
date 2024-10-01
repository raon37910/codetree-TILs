let n = Number(require('fs').readFileSync(0).toString().trim())
let code = 'A'.charCodeAt()

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= i; j++) {
        line += String.fromCharCode(code++)
        if(code > 'Z'.charCodeAt()) code = 'A'.charCodeAt()
    }
    console.log(line)
}