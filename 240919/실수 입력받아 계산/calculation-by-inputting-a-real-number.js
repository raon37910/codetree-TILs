let [a, b] = require('fs').readFileSync(0).toString().split('\n').map(x => +x)
console.log((a + b).toFixed(2))