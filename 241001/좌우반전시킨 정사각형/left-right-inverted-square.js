let n = Number(require('fs').readFileSync(0).toString())

for(let i = 1; i <= n; i++) {
    let line = ''
    let startNumber = n * i
    for(let j = n; j >= 1; j--) {
        line += `${startNumber - (i) *(n - j)} `
    }
    console.log(line)
}