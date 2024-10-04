let str = require('fs').readFileSync(0).toString().trim()
let result = ''
let cnt = 0

if(str.length === 1) {
    console.log(2)
    console.log(`${str}1`)
    return
}

for(let i = 0; i < str.length; i++) {
    if(i === 0) {
        result += str[i]
        cnt++
        continue
    }

    if(i === str.length - 1) {
        // 마지막 원소가 연속적으로 진행 중이면 cnt만 추가한다.
        if(str[i-1] === str[i]) {
            result += ++cnt
        } else {
            result += cnt
            // 마지막 원소가 새 원소면
            result += `${str[i]}1`
        }
        continue
    }

    // 앞전 원소랑 동일 하다면
    if(str[i-1] === str[i]) {
        cnt++
    } else {
        // 새로운 원소가 나왔다면
        result += cnt
        result += str[i]
        cnt = 1
    }
}

console.log(result.length)
console.log(result)