let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n')

while(a.indexOf(b) > -1) {
    let index = a.indexOf(b)
    a = a.slice(0, index) + a.slice(index+b.length)
    // console.log(a)
}
console.log(a)