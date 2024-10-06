let n = Number(require('fs').readFileSync(0).toString().trim())

function print1(cur) {
    if(cur > n) {
        console.log()
        return
    }

    process.stdout.write(`${cur} `)
    print1(cur+1)
}

function print2(cur) {
    if (cur <= 0) {
        console.log()
        return
    }

    process.stdout.write(`${cur} `)
    print2(cur-1)
}

print1(1)
print2(n)