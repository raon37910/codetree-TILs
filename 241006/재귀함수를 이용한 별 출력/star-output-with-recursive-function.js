let n = Number(require('fs').readFileSync(0).toString())
function printStar(cur) {
    if(cur > n) {
        return
    }

    for(let i = 0; i < cur; i++) {
        process.stdout.write('*')
    }
    console.log()
    printStar(cur+1)
}

printStar(1)