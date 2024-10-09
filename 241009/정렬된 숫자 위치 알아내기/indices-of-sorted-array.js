class Data {
    constructor(data, prev, next) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

let inputs = require('fs').readFileSync(0).toString().trim().split('\n')
let n = Number(inputs[0])
let arr = inputs[1].trim().split(' ').map(Number)
let numbers = []

for(let i = 0; i < arr.length; i++) {
    numbers.push(new Data(arr[i], i + 1))
}

numbers.sort((a, b) => a.data - b.data)
// console.log(numbers)
for(let i = 0; i < numbers.length; i++) {
    numbers[i].next = i + 1
}

numbers.sort((a, b) => a.prev - b.prev)

for(let i = 0; i < numbers.length; i++) {
    process.stdout.write(`${numbers[i].next} `)
}