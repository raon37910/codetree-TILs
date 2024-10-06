let n = Number(require('fs').readFileSync(0).toString().trim())

function printN(cur) {
    if (cur === 0) {
        return
    }

    process.stdout.write(`${cur} `)
    printN(cur - 1)
    process.stdout.write(`${cur} `)
}

printN(n)