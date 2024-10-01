let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = n; i >= 1; i--) {
    let line = ''
    for(let j = n; j >=1; j--) {
        line += `(${i},${j}) `
    }
    console.log(line)
}