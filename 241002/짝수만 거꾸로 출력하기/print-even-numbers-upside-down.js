let stack = []
let [n, arr] = require('fs').readFileSync(0).toString().trim().split('\n')
arr = arr.split(' ').map(Number)
arr.forEach(x => {
    if(x % 2 === 0) stack.push(x)
})
let result = ''
while(stack.length !== 0) {
    result += `${stack.pop()} `
}
console.log(result)