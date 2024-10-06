let n = Number(require('fs').readFileSync(0).toString().trim())

function printStar(cur) {
    if(cur <= 0) {
        return
    }

    for(let i = 0; i < cur; i++) {
        process.stdout.write('* ')
    }
    console.log()

    printStar(cur - 1)
    for(let i = 0; i < cur; i++) {
        process.stdout.write('* ')
    }
    console.log()
}

printStar(n)