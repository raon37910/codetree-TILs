let [mm, dd, yy] = require('fs').readFileSync(0).toString().trim().split('-')
console.log(`${yy}.${mm}.${dd}`)