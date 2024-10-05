function check(str) {
    let length = parseInt(str.length / 2)
    for(let i = 0, j = str.length - 1; i < length; i++, j--) {
        console.log(str[i], str[j])
        if(str[i] !== str[j]) return false
    }
    return true
}
// lgskt m tksgl 길이 = 11 =>
let str = require('fs').readFileSync(0).toString().trim()
// 길이가 6 -> 0 , 1, 2
// 길이가 5 -> 0, 1
console.log(check(str) ? 'Yes' : 'No')