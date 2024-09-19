let score = require('fs').readFileSync(0).toString().trim()
score = parseInt(score)

if(score >= 80) {
    console.log('pass')
} else [
    console.log(`${80-score} more score`)
]