function solution(n) {
    let num = 1
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            process.stdout.write(`${num} `)
            num++
            if(num >= 10) {
                num = 1
            }
        }
        process.stdout.write('\n')
    }
}

let n = Number(require('fs').readFileSync(0).toString().trim())
solution(n)