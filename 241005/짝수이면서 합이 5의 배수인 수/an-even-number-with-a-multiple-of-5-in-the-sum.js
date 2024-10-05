function checkCondition(n) {
    return n % 2 === 0 && getSumOfNum(n) % 5 === 0
}

function getSumOfNum(n) {
    let strN = n + ''
    return strN.split('').map(Number).reduce((prev, cur) => prev + cur, 0)
}

let n = Number(require('fs').readFileSync(0).toString().trim())
console.log(checkCondition(n) ? 'Yes' : 'No')