let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let line = ''
    for(let j = 1; j < i; j++) {
        line += `  `
    }
    for(let j = n-i+1; j >= 1; j--) {
        line += `${j} `
    }
    console.log(line)
}