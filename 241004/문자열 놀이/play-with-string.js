let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let [s, n] = inputs[0].split(' ')
s = s.split('')
n = Number(n)



for(let i = 1; i <= n; i++) {
    let [cmd, a, b] = inputs[i].split(' ')

    if(cmd === '1') {
        a = Number(a-1)
        b = Number(b-1) 
        let temp = s[a]
        s[a] = s[b]
        s[b] = temp
        console.log(s.join(''))
    } else {
        for(let i = 0; i < s.length; i++) {
            if(s[i] === a) {
                s[i] = b
            }
        }
        console.log(s.join(''))
    }
}