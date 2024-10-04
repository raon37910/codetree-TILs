let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n')

for(let i = 0; i < a.length-1; i++) {
    a = a[a.length - 1] + a.slice(0, a.length - 1)
    if(a === b) {
        console.log(i + 1)
        return
    }
}

console.log(-1)