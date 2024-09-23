let [a, b] = require('fs').readFileSync(0).toString().split(' ')
a = Number(a) 
b = Number(b)

if(a <= 0) {
    console.log(0)
} else {
    let result = ''
    for(let i = 0; i < b; i++) {
        result += `${a}`
    }
    console.log(result)
}