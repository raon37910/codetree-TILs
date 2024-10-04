// 1 왼쪽으로 쉬프트
// 2 오른쪽으로 쉬프트
// 3 역순
let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [str, n] = inputs[0].split(' ')
for(let i = 1; i <= n; i++) {
    if(inputs[i] === '1') {
        str = str.slice(1) + str[0]
        console.log(str)
    } else if (inputs[i] === '2') {
        str = str[str.length-1] + str.slice(0, str.length - 1)
        console.log(str)
    } else {
        str = str.split('').reverse().join('')
        console.log(str)
    }
}