function getSumDivide10(n) {
    let sum = 0
    for(let i = 1; i <= n; i++) {
        sum += i
    }
    return parseInt(sum / 10)
}

function printNum(n) {
    console.log(n)
}

let n = Number(require('fs').readFileSync(0).toString().trim())
let answer = getSumDivide10(n)
printNum(answer)