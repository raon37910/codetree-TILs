let [a,b] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
console.log(`${parseInt(a/b)}...${a%b}`)