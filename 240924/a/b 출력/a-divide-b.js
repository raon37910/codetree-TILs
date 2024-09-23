let [a, b] = require('fs').readFileSync(0).toString().trim().split(' ')
a = Number(a)
b = Number(b)
// a/b 계산
let result = a / b;

// 소수점 21번째 자리에서 내림
let truncatedResult = Math.floor(result * Math.pow(10, 21)) / Math.pow(10, 21);
let output = truncatedResult + ""
let cur = output.length

while(cur <= 21) {
    output += '0'
    cur++
}

// 결과 출력
console.log(output);