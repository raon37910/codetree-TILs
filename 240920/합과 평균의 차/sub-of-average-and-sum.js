let [a,b,c] = require('fs').readFileSync(0).toString().split(' ').map(x=>+x)
let sum = a + b + c
let avg = sum / 3
let sumMinusAvg = sum - avg 
console.log(sum)
console.log(avg)
console.log(sumMinusAvg)