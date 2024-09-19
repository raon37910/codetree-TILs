let n = require('fs').readFileSync(0).toString()
n = Number(n)

if(n >= 3000) {
    console.log('book')
} else if(n >= 1000) {
    console.log('mask')
} else if(n >= 500) {
    console.log('pen')
} else {
    console.log('no')
}