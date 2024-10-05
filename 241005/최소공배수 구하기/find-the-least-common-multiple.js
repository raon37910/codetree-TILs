function solution(n, m) {
    let maxNum = n * m
    let start = Math.min(n, m)
    
    for(let i = start; i <= maxNum; i++) {
        if(i % n === 0 && i % m === 0) {
            console.log(i)
            return
        }
    }
}

let [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
solution(n, m)