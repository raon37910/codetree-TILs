let n = require('fs').readFileSync(0).toString().trim()
n = Number(n)

let result = ''
i = 1

while(i <= n) {
    if(i % 3 === 0) {
        result += `${i} `
    }

    i++;
}

console.log(result)