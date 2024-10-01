let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)

for(let i = 2; i <= 8; i +=2) {
    let line = ''
    for(let j = b ; j >= a; j--) {
        line += `${j} * ${i} = ${j*i} `
        if(j !== a) {
            line += '/ '
        }
    }
    console.log(line)
}