let [str1, str2] = require('fs').readFileSync(0).toString().trim().split('\n')
console.log(str1.split(' ').join('') + str2.split(' ').join(''))