let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
inputs = inputs.slice(1)
console.log(inputs.join(''))