function check(a, b, start, n2) {
    for(let i = 0; i < n2; i++) {
        if(a[i + start] !== b[i]) {
            return false
        }
    }
    return true
}
// 수열 B가 수열 A의 연속 부분 수열인가?!
let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [n1, n2] = inputs[0].split(' ').map(Number)
let a = inputs[1].split(' ').map(Number)
let b = inputs[2].split(' ').map(Number)
if(n1 < n2) {
    console.log('No')
} else {
    for(let i = 0; i < a.length-n2+1; i++) {
        if(check(a, b, i, n2)) {
            console.log('Yes')
            return
        }
    }
    console.log('No')
}