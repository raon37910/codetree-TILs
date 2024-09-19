let a = require('fs').readFileSync(0).toString()
a = +a 
console.log(a === 1 ? 't' : 'f')