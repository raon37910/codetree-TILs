function solution(str) {
    for(let i = 1; i < str.length; i++) {
        if(str[i] !== str[i-1]) return true
    }
    return false
}

let str = require('fs').readFileSync(0).toString().trim()
console.log(solution(str) ? 'Yes' : 'No')