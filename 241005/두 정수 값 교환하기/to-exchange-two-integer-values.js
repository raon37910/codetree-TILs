function swap(a, b) {
    return [b, a]
}
let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
[a, b] = swap(a, b);
console.log(`${a} ${b}`)