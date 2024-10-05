let [m, d] = require('fs').readFileSync(0).toString().trim().split(' ').map(Number)

if(m >= 13 || d >= 32) {
    console.log('No')
} else if(m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
    console.log('Yes')
} else if(m === 2) { 
    if(d <= 28) {
        console.log('Yes')
    } else {
        console.log('No')
    }
} else {
    if(d <= 30) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}