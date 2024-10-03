let arr = require('fs').readFileSync(0).toString().split(' ').map(Number)
let minValue = Number.MAX_SAFE_INTEGER
let maxValue = Number.MIN_SAFE_INTEGER

for(let elem of arr) {
    if(elem < 500) {
        if(maxValue < elem) {
            maxValue = elem
        }
    }

    if(elem > 500) {
        if(minValue > elem) {
            minValue = elem
        }
    }
}

console.log(maxValue, minValue)