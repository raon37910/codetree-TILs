function printAnswer(n) {
    for(let i = 0; i < n; i++) {
        console.log("12345^&*()_")
    }
}

let n = require('fs').readFileSync(0).toString()
n = Number(n)
printAnswer(n)