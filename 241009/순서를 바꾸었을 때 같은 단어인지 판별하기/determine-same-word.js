let [str1, str2] = require('fs').readFileSync(0).toString().trim().split('\n')
str1 = str1.trim().split('').sort().join('')
str2 = str2.trim().split('').sort().join('')

console.log(str1 === str2 ? 'Yes' : 'No')