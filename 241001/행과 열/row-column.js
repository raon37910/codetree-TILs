let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)

for(let i = 1; i <= a; i++) {
    let line = ''
    for(let j = 1; j <= b; j++) {
        line += `${i*j} `
    }
    console.log(line)
}