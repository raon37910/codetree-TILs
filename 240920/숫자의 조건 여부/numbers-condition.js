let a = require('fs').readFileSync(0).toString().trim()
a = +a
if(a >= 113) {
    console.log(1)
} else {
    console.log(0)
}