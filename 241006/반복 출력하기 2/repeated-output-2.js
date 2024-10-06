function printHello(n) {
    if(n === 0) {
        return
    }
    printHello(n-1)
    console.log('HelloWorld')
}

let n = Number(require('fs').readFileSync(0).toString().trim())
printHello(n)