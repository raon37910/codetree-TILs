let n = Number(require('fs').readFileSync(0).toString())
let cnt = 0
let result = ''
let cur = n
while(cnt < 2) {
    result += `${cur} `
    if(cur % 5 === 0) cnt++
    cur += n
}
console.log(result)