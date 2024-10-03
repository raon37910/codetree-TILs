let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
if(a.length === b.length) {
    console.log('same')
} else if(a.length > b.length) {
    console.log(a, a.length)
} else {
    console.log(b, b.length)
}