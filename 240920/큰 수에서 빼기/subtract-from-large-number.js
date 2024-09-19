let [a, b] = require('fs').readFileSync(0).toString().split(' ').map(x => +x)
if(a < b) {
    console.log(b - a)
} else {
    console.log(a - b)
}