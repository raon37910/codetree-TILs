let [h, w] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
let bmi = 10000 * w / (h * h)
console.log(parseInt(bmi))
if(bmi >= 25) {
    console.log('Obesity')
}