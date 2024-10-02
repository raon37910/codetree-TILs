let scores = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
console.log((scores.reduce((a, b) => a + b, 0) / 8).toFixed(1))