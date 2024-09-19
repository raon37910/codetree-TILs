let score = require('fs').readFileSync(0).toString()
score = +score
console.log(score === 100 ? 'pass' : 'failure')