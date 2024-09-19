let [width, height] = require('fs').readFileSync(0).toString().trim().split(' ').map(x=>+x)
width += 8
height *= 3
console.log(width)
console.log(height)
console.log(width * height)