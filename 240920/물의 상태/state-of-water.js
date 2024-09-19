let n = require('fs').readFileSync(0).toString()
n = parseInt(n)

if (n < 0) {
    console.log('ice')
} else if(n >= 100) {
    console.log('vapor')
} else {
    console.log('water')
}