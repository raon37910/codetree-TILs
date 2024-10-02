let [n, scores] = require('fs').readFileSync(0).toString().trim().split('\n')
n = Number(n)
scores = scores.split(' ').map(Number)
sum = scores.reduce((a, b) => a + b, 0)
avg = (sum / n).toFixed(1)

console.log(avg)

if(avg >= 4.0) {
    console.log('Perfect')
} else if (avg >= 3.0) {
    console.log('Good')
} else {
    console.log('Poor')
}