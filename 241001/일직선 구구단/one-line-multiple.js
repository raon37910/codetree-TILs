let n = Number(require('fs').readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}