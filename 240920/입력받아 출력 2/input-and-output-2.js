let [front, back] = require('fs').readFileSync(0).toString().trim().split('-')
console.log(`${front}${back}`)