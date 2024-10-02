let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let cnt = Array(4).fill(0)

for(let input of inputs) {
    let [YN, temperature] = input.split(' ')
    temperature = Number(temperature)

    // A
    if(YN === 'Y' && temperature >= 37) {
        cnt[0]++
        continue
    }
    // B
    if(YN === 'N' && temperature >= 37) {
        cnt[1]++
        continue
    }
    // C
     if(YN === 'Y' && temperature < 37) {
        cnt[2]++
        continue
    }
    // D
    cnt[3]++
}

let result = ''

for(let c of cnt) {
    result += `${c} `
}

if(cnt[0] >= 2) {
    result += 'E'
}

console.log(result)