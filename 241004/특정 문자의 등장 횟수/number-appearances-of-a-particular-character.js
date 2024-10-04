let str = require('fs').readFileSync(0).toString().trim()
let ee = 0
let eb = 0

for(let i = 0 ; i < str.length-1; i++) {
    let sub = str[i] + str[i+1]
    if(sub === 'ee') {
        ee++
    }

    if(sub === 'eb') {
        eb++
    }
}

console.log(ee, eb)