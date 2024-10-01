let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)

for(let i = 1; i <= 9; i++) {
    let line = ''
    for(let j = b; j >= a; j-=2) {
        line += `${j} * ${i} = ${j * i} `

        if(j !== a) {
            line += '/ '
        }
    }
    console.log(line)
}