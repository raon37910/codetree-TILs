let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n, k, t] = inputs[0].trim().split(' ')
n = Number(n)
k = Number(k)

let words = []

for(let i = 1; i <=n ;i++) {
    if(inputs[i].slice(0, t.length) === t) {
        words.push(inputs[i])
    }
}

words.sort()
console.log(words[k-1])