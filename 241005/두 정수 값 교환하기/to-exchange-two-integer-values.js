function swap(a, b) {
    return [b, a]
}
let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
let arr = swap(a, b)
a = arr[0]
b = arr[1]
console.log(`${a} ${b}`)