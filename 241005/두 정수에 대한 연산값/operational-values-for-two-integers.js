function solution(a, b) {
    if(a > b) {
        a += 25
        b *= 2
    } else {
        b += 25
        a *= 2
    }
    return [a, b]
}

let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number);
[a, b] = solution(a, b)
console.log(`${a} ${b}`)