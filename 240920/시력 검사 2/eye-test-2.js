let a = require('fs').readFileSync(0).toString()
a = Number(a)

if(a >= 1.0) {
    console.log('High')
} else if(a >= 0.5) {
    console.log('Middle')
} else {
    console.log('Low')
}