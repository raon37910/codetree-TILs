function solution(n, m) {
    let minNum = Math.min(n, m)
    let max = 1
    for(let i = 2; i <= minNum; i++) {
        if(n % i === 0 && m % i === 0) {
            max = i
        }
    }
    console.log(max)
}

let [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)
solution(n, m)