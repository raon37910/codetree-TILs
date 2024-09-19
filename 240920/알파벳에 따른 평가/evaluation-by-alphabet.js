let c = require('fs').readFileSync(0).toString().trim()
console.log(c)
if(c === 'S') {
    console.log('Superior')
} else if(c === 'A') {
    console.log('Excellent')
} else if (c === 'B') {
    console.log('Good')
} else if (c ==='C') {
    console.log('Usually')
} else if (c === 'D') {
    console.log('Effort')
} else {
    console.log('Failure')
}