let [str, query] = require('fs').readFileSync(0).toString().trim().split('\n')

for(let i = 0; i <= query.length; i++) {
    let q = query[i]
    if(q === 'L') {
        str = str.slice(1) + str[0]
    } else if (q === 'R') {
        str = str[str.length-1] + str.slice(0, str.length - 1)
    } 
}

console.log(str)