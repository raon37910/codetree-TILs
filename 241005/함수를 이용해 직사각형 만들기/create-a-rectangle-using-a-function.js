function print(n, m) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            process.stdout.write('1')
        }
        process.stdout.write('\n')
    }
}

let [n, m] = require('fs').readFileSync(0).toString().trim().split(' ').map(x => +x)
print(n, m)