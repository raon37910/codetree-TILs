function find(a, b) {
    let bLength = b.length;
    let aLength = a.length;

    for(let i = 0; i < a.length - b.length + 1; i++) {
        let temp = a.slice(i, i + b.length)
        if(temp === b) {
            return i
        }
    }
    return -1
}

let [a, b] = require('fs').readFileSync(0).toString().trim().split('\n')
let ans = find(a, b)
console.log(ans)