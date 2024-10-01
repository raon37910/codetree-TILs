let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1 ; i <= n; i++) {
    let line = ''
    for(let j = 1; j <= n-i+1; j++) {
        line += `${i} * ${j} = ${i * j} `
        if(j !== n-i+1) {
            line += '/ '
        }
    }
    console.log(line)
}